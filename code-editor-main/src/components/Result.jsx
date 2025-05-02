import { useState, useEffect, useContext, useMemo } from 'react';
import { DataConst } from '../context/DataProvide';
import { Box, styled } from '@mui/material';

const Container = styled(Box)`
    height: 41vh;
`;

const Result = () => {
    const [src, setSrc] = useState('');
    const { html, css, js } = useContext(DataConst);

    // Memoize srcCode so it doesn't recreate on every render
    const srcCode = useMemo(() => `
        <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
            <script type="text/javascript">
                (() => {
                    ${js}
                })();
            </script>
            </body>
        </html>
    `, [html, css, js]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 250);

        return () => clearTimeout(timeout);
    }, [srcCode]);

    return (
        <Container style={html || css || js ? null : { background: '#444857' }}>
            <iframe
             
               srcDoc={src}
               title="output"
               sandbox="allow-scripts allow-modals allow-forms"
               frameBorder="0"
               width="100%"
               height="100%"
           />
           
            
        </Container>
    );
};

export default Result;
