import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,

  authDomain: process.env.authDomain,

  projectId: "micro-eye-353707", //for some reason whenever I put an env variable here firebase refuses to make a connection (I've checked spelling multiple times)

  storageBucket: process.env.storageBucket,

  messagingSenderId: process.env.messagingSenderId,

  appId: process.env.appId,
};

if (getApps().length === 0) {
  var app = initializeApp(firebaseConfig);
} else {
  getApp();
}

export const db = getFirestore(app);

// TODO: CRUD operations