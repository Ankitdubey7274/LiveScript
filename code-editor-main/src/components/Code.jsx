import Editor from "./Editor";
import { Box, styled } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { DataConst } from '../context/DataProvide';
import { db } from './firebase'; 
import { doc, getDoc, setDoc } from "firebase/firestore";

const Container = styled(Box)`
    background-color: #060606;
    height: 50vh;
    display: flex;
`;

function Code() {
    const { html, css, js, setHtml, setCss, setJs } = useContext(DataConst);
    const userId = localStorage.getItem("userId");
    const [saveStatus, setSaveStatus] = useState(""); 

    // Fetch code when component loads
    useEffect(() => {
        async function fetchData() {
            if (userId) {
                try {
                    const docRef = doc(db, "userCodes", userId);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        setHtml(data.html || "");
                        setCss(data.css || "");
                        setJs(data.js || "");
                    } else {
                        console.log("No existing code found.");
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        }
        fetchData();
    }, [userId, setHtml, setCss, setJs]);

    // Auto save every 1 second
    useEffect(() => {
        const saveData = async () => {
            if (userId) {
                try {
                    const docRef = doc(db, "userCodes", userId);
                    await setDoc(docRef, {
                        userId,
                        html,
                        css,
                        js
                    });
                    setSaveStatus("Saved!");
                    setTimeout(() => setSaveStatus(""), 2000);
                } catch (error) {
                    console.error("Error saving document:", error);
                    setSaveStatus("Failed to save!");
                }
            }
        };

        const timeoutId = setTimeout(() => {
            saveData();
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [html, css, js, userId]);

    return (
        <>
            <Container>
                <Editor language="xml" heading="HTML" value={html} onChange={setHtml} icon="/" color="#FF3C41" />
                <Editor language="css" heading="CSS" value={css} onChange={setCss} icon="*" color="#0EBEFF" />
                <Editor language="javascript" heading="JS" value={js} onChange={setJs} icon="( )" color="#FCD000" />
            </Container>

            {saveStatus && (
                <div style={{ color: 'white', textAlign: 'center', marginTop: '10px', fontSize: '14px' }}>
                    {saveStatus}
                </div>
            )}
        </>
    );
}

export default Code;
