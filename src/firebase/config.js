// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrc5hS_ZMfXFrg7mNNT-mCCUSph5-zduU",
  authDomain: "journal-app-ade35.firebaseapp.com",
  projectId: "journal-app-ade35",
  storageBucket: "journal-app-ade35.appspot.com",
  messagingSenderId: "561134279831",
  appId: "1:561134279831:web:d1162be99cdef89cb55dd2"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);