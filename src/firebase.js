import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD1sMZWFecigKqRx2dh0bIcwhW71B6nR2w",
  authDomain: "tushar-react-portfolio.firebaseapp.com",
  projectId: "tushar-react-portfolio",
  storageBucket: "tushar-react-portfolio.appspot.com",
  messagingSenderId: "1072308526233",
  appId: "1:1072308526233:web:95b0bfc9813c4a3ca2ac08"
};

// Initialize Firebase,FireStore
export const app = initializeApp(firebaseConfig);
export const db =getFirestore();