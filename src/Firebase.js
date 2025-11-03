// src/Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Replace these values with your actual Firebase credentials
const firebaseConfig = {
  apiKey: "AIzaSyD3nJIFNzpOx74ExdC-ScRjReVKz4xZ04w",
  authDomain: "tour-and-travel-c7658.firebaseapp.com",
  projectId: "tour-and-travel-c7658",
  storageBucket: "tour-and-travel-c7658.firebasestorage.app",
  messagingSenderId: "203242004391",
  appId: "1:203242004391:web:740a585fe467923012e082",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Authentication and export it
const auth = getAuth(app);

export { auth };
