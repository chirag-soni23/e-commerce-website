// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD38Ln2y0Lk4hgeK6sNXdbj6h8feXAccSM",
  authDomain: "e-commerce-8eb40.firebaseapp.com",
  projectId: "e-commerce-8eb40",
  storageBucket: "e-commerce-8eb40.appspot.com",
  messagingSenderId: "392119250404",
  appId: "1:392119250404:web:42f8119095386a1a3c2bf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}