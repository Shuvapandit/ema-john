// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg8hWzKIZu7RKngz75GJPB3m63XIp8o2s",
  authDomain: "ema-jhon-281f9.firebaseapp.com",
  projectId: "ema-jhon-281f9",
  storageBucket: "ema-jhon-281f9.appspot.com",
  messagingSenderId: "987662817754",
  appId: "1:987662817754:web:64ecd6ac7cffd0c236c8e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default app;