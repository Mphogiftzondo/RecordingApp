// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8DRNwRb8MlLVoAOeX6MAus8iuIxGVmgo",
  authDomain: "recording-app-35617.firebaseapp.com",
  projectId: "recording-app-35617",
  storageBucket: "recording-app-35617.appspot.com",
  messagingSenderId: "758751564692",
  appId: "1:758751564692:web:0d9bde79dc37972bc4f581",
  measurementId: "G-Z70LM4YH0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
// const db = getFirestore(app);

export {auth} ;