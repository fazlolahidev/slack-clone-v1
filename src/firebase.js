// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6PrIrbNXt4_DCwbAJbzcy_Y1jTBUZCaM",
  authDomain: "slack-clone-3dde0.firebaseapp.com",
  projectId: "slack-clone-3dde0",
  storageBucket: "slack-clone-3dde0.appspot.com",
  messagingSenderId: "813026843208",
  appId: "1:813026843208:web:e092d9391647cf436a167d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();

