import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEV-fhYzAVU0lWpFoIE4axWKHV27GLDig",
  authDomain: "dggymwear.firebaseapp.com",
  projectId: "dggymwear",
  storageBucket: "dggymwear.appspot.com",
  messagingSenderId: "523077787289",
  appId: "1:523077787289:web:630159af587533daf4e208",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
