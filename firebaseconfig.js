// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 
import {getFirestore} from "firebase/firestore"
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARWnuPxdpObft9l_Z7Uy853lyN3KCJqIs",
  authDomain: "prova-2eb74.firebaseapp.com",
  projectId: "prova-2eb74",
  storageBucket: "prova-2eb74.appspot.com",
  messagingSenderId: "756682964950",
  appId: "1:756682964950:web:80c83462af8027714f2e77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const app_auth = getAuth(app);
export const app_DB = getFirestore(app);
