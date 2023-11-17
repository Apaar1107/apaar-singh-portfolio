import {getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB6RCYe_eM8F4xQOghl031UiuPYUrWx7uc",
  authDomain: "apaar-singh-portfolio.firebaseapp.com",
  projectId: "apaar-singh-portfolio",
  storageBucket: "apaar-singh-portfolio.appspot.com",
  messagingSenderId: "697713625771",
  appId: "1:697713625771:web:1238f52f587bb28dd105ee"
};


export const app = initializeApp(firebaseConfig);

export const db=getFirestore();