
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyACoIkEzKj93r5M1swYdmc6moiqV40HH-Q",
  authDomain: "lc-goal-tracker.firebaseapp.com",
  projectId: "lc-goal-tracker",
  storageBucket: "lc-goal-tracker.firebasestorage.app",
  messagingSenderId: "142117742383",
  appId: "1:142117742383:web:2dc777c11533d08cc8a3da"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)