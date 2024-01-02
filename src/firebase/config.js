// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDysP51JkLw_hedgTCy5V_vJJLfvVXKuFY",
  authDomain: "react-journalapp-c882f.firebaseapp.com",
  projectId: "react-journalapp-c882f",
  storageBucket: "react-journalapp-c882f.appspot.com",
  messagingSenderId: "538875855266",
  appId: "1:538875855266:web:6ca122645c51d4c60732fb",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
