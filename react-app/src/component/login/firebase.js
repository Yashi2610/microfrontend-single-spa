import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  projectId: "book-store-29283",

  appId: "1:720031404404:web:62aeebeb17b2d8494b9c21",

  databaseURL: "https://book-store-29283-default-rtdb.firebaseio.com",

  storageBucket: "book-store-29283.appspot.com",

  apiKey: "AIzaSyAiReXoRMnRLNmw0jZjmlumBA-tKSsH0Dg",

  authDomain: "book-store-29283.firebaseapp.com",

  messagingSenderId: "720031404404",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const auth = getAuth();
