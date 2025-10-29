// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw4tOG1sJf4djYuOUoK2HmDh4ED2AU6w8",
  authDomain: "tourapp-6581b.firebaseapp.com",
  projectId: "tourapp-6581b",
  storageBucket: "tourapp-6581b.firebasestorage.app",
  messagingSenderId: "1010809281560",
  appId: "1:1010809281560:web:60e835b518a0f1d0a6776d",
  measurementId: "G-KV6Z18Z5FM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get authentication instance
const Auth = getAuth(app);
 //export auth instance
export { auth };