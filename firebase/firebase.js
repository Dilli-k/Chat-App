import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYt8viWddiZTJwSWuMVLJptxbwjDSN1uc",
  authDomain: "chat-app-666ad.firebaseapp.com",
  projectId: "chat-app-666ad",
  storageBucket: "chat-app-666ad.appspot.com",
  messagingSenderId: "985804239378",
  appId: "1:985804239378:web:be97bf5e523eab32549ecb",
  measurementId: "G-ZCJ4V3ZDND",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
