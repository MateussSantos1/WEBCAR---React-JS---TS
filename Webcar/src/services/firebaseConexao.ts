// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3E6Gvc-iho3KU4xQSu1sV-cole5p8GvY",
  authDomain: "webcarros-d7907.firebaseapp.com",
  projectId: "webcarros-d7907",
  storageBucket: "webcarros-d7907.firebasestorage.app",
  messagingSenderId: "388827131181",
  appId: "1:388827131181:web:42a4b35a19c53a692977a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };