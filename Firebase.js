// Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE5mjb4uru_I9tSNHmJFdnn-Adc3xsCis",
  authDomain: "tourapp-b5da3.firebaseapp.com",
  projectId: "tourapp-b5da3",
  storageBucket: "tourapp-b5da3.firebasestorage.app",
  messagingSenderId: "228738487963",
  appId: "1:228738487963:web:7b8c95b26a0d4f67ff983e",
  measurementId: "G-97K67SZGT7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
