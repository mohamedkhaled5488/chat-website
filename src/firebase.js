import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB_ts6RCDSylO3a5j304kQwpRm4v16OtOc",
  authDomain: "chat-f0da2.firebaseapp.com",
  projectId: "chat-f0da2",
  storageBucket: "chat-f0da2.appspot.com",
  messagingSenderId: "715787212570",
  appId: "1:715787212570:web:226ae541a4c9eae799bea3",
  measurementId: "G-T84VR6T6GV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()