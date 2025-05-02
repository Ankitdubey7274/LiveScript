import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQtW3iOlghBkgUYT-fVk6Q79mAJX5ayiI",
  authDomain: "livescript-bb90c.firebaseapp.com",
  projectId: "livescript-bb90c",
  storageBucket: "livescript-bb90c.firebasestorage.app",
  messagingSenderId: "846847603148",
  appId: "1:846847603148:web:e5446b3ac649cb0a0ced69",
  measurementId: "G-B0713H2PKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export auth to be used for authentication
export const db = getFirestore(app); // Export db to interact with Firestore
