// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKh6sNQBs1No_WyiBEYShNRSBfpKkCOLw",
  authDomain: "inventory-management-app-3181b.firebaseapp.com",
  projectId: "inventory-management-app-3181b",
  storageBucket: "inventory-management-app-3181b.appspot.com",
  messagingSenderId: "550105642264",
  appId: "1:550105642264:web:80cde57cc27448c0a2da6d",
  measurementId: "G-DRKHR3Q012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}