// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDONxZL5nTVI5o47RqaQ2MXw5nWxll7wRA",
  authDomain: "chromarena.firebaseapp.com",
  projectId: "chromarena",
  storageBucket: "chromarena.firebasestorage.app",
  messagingSenderId: "489331997387",
  appId: "1:489331997387:web:e39540fe1b377798dc794e",
  measurementId: "G-G9PBJ4RC8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);