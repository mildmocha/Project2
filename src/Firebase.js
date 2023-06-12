// fBase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signOut} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFq_MYBErv3bKUw0kEhBM9otCpABstFfk",
  authDomain: "project2-d16b2.firebaseapp.com",
  projectId: "project2-d16b2",
  storageBucket: "project2-d16b2.appspot.com",
  messagingSenderId: "899504320452",
  appId: "1:899504320452:web:c2d4c1cec9d87dfe64be91"
};

// Initialize Firebase

const app = initializeApp (firebaseConfig)

const authService = getAuth();

const auth = getAuth(app);

export { auth, app, authService  };