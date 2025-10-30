// src/Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Replace these values with your actual Firebase credentials
const firebaseConfig = {
  apiKey: "AIzaSyDw4tOG1sJf4djYuOUoK2HmDh4ED2AU6w8",
  authDomain: "tourapp-6581b.firebaseapp.com",
  projectId: "tourapp-6581b",
  storageBucket: "tourapp-6581b.appspot.com",
  messagingSenderId: "1010809281560",
  appId: "1:1010809281560:web:60e835b518a0f1d0a6776d",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Authentication and export it
const auth = getAuth(app);

export { auth };
