// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzyAiJt6L-f67Av4WBgD0RH46pysCN3bA",
  authDomain: "exerciseapp-17787.firebaseapp.com",
  projectId: "exerciseapp-17787",
  storageBucket: "exerciseapp-17787.appspot.com",
  messagingSenderId: "364079166039",
  appId: "1:364079166039:web:1a99d0f95dfb0916186912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Intitialize firestore
export const db = getFirestore(app); // ตัวแปร db จะชื่ออะไรก็ได้