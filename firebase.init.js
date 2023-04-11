// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArJ5PIwjL3zU2S5eh8bnPCnSyqlfA2qV8",
    authDomain: "bangladesh-mart.firebaseapp.com",
    projectId: "bangladesh-mart",
    storageBucket: "bangladesh-mart.appspot.com",
    messagingSenderId: "75493619043",
    appId: "1:75493619043:web:e18fcc0e57bb5597578f56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
