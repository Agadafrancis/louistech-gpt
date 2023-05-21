import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTGPQB7dXmdKlf29V03SDoqogyJYzL0yA",
  authDomain: "louis-gpt.firebaseapp.com",
  projectId: "louis-gpt",
  storageBucket: "louis-gpt.appspot.com",
  messagingSenderId: "109445236",
  appId: "1:109445236:web:b3d58d0c216ca659411121"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }