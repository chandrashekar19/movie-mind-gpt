// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpzSA9pZERCbwrWuNzTnqfcbdqKUp7IrE",
  authDomain: "movie-mind-gpt.firebaseapp.com",
  projectId: "movie-mind-gpt",
  storageBucket: "movie-mind-gpt.firebasestorage.app",
  messagingSenderId: "653744441811",
  appId: "1:653744441811:web:43bd701e60d371c3ea8726",
  measurementId: "G-ZC8YSHN1GV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();
