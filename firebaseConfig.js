import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBB_OtsiwfaJ3IQiBV1ZlOMf1ir9Z-isNE",
  authDomain: "flowapp-4e0f3.firebaseapp.com",
  projectId: "flowapp-4e0f3",
  storageBucket: "flowapp-4e0f3.firebasestorage.app",
  messagingSenderId: "253252110094",
  appId: "1:253252110094:web:6ac45badfbb76751d3b95f",
  measurementId: "G-4NBLKL0SDR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
