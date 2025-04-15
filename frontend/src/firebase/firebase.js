// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVSGezHC_eB1hAU0KiEx0z3q1VIHAuCyw",
  authDomain: "smart-campus-connect-b9a9e.firebaseapp.com",
  projectId: "smart-campus-connect-b9a9e",
  storageBucket: "smart-campus-connect-b9a9e.firebasestorage.app",
  messagingSenderId: "519030869671",
  appId: "1:519030869671:web:9247299aa6d17230c75582"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app); 
export { auth, googleProvider ,db};

