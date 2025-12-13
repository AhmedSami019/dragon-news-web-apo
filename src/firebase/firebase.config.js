// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMWD8A2dyMe-to_joUiExy8RyrUpy9Fjg",
  authDomain: "dragon-news-auth-66b35.firebaseapp.com",
  projectId: "dragon-news-auth-66b35",
  storageBucket: "dragon-news-auth-66b35.firebasestorage.app",
  messagingSenderId: "890042827312",
  appId: "1:890042827312:web:edc30ad6299b89849a23f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app