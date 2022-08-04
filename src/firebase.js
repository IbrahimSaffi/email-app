// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdURdk5LpJ2zupEfqFKoV3T6nK6r9OhZY",
  authDomain: "inbox-app-805e5.firebaseapp.com",
  projectId: "inbox-app-805e5",
  storageBucket: "inbox-app-805e5.appspot.com",
  messagingSenderId: "629515368579",
  appId: "1:629515368579:web:08f24e4d7dc36628a8c3b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export default database
