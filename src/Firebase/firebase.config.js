// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgV62e__SflCUTEGAZDJmo5DQX9GEQXaU",
  authDomain: "email-pass-4afd7.firebaseapp.com",
  projectId: "email-pass-4afd7",
  storageBucket: "email-pass-4afd7.appspot.com",
  messagingSenderId: "827319706187",
  appId: "1:827319706187:web:f1c74a14236e4535d623ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;