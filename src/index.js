import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAyiCq6xnMqczAvswtHabLz1UwiOqsWSI",
  authDomain: "react-shopping-cart-11936.firebaseapp.com",
  projectId: "react-shopping-cart-11936",
  storageBucket: "react-shopping-cart-11936.appspot.com",
  messagingSenderId: "855887324983",
  appId: "1:855887324983:web:57420e7b1cce2e05b45cb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
