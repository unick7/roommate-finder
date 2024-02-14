// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLQScWKa7OWTxGGn-IDBRmPvv0WRvkIv0",
  authDomain: "find-roomie-7889f.firebaseapp.com",
  projectId: "find-roomie-7889f",
  storageBucket: "find-roomie-7889f.appspot.com",
  messagingSenderId: "11398343711",
  appId: "1:11398343711:web:71818a36abcfda4174792a",
  measurementId: "G-BY1Z7C96ZE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
