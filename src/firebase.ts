// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0IU2TA0pKZ0PlyzBwPDq4crYNvVKTmsU",
  authDomain: "grow-env.firebaseapp.com",
  projectId: "grow-env",
  storageBucket: "grow-env.appspot.com",
  messagingSenderId: "954843689232",
  appId: "1:954843689232:web:1bc02e6eb56b1fe35ab595",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
