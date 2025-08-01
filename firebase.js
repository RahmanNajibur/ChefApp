// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6UK2a4uiM3ozWBZvooGlfpPtO4Pwx9vI",
  authDomain: "final-project-295b7.firebaseapp.com",
  projectId: "final-project-295b7",
  storageBucket: "final-project-295b7.firebasestorage.app",
  messagingSenderId: "780012778772",
  appId: "1:780012778772:web:ab958a6bb306bd8c95be01",
  measurementId: "G-5JY3BDVS9M"
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app)
export const db = getFirestore(app)