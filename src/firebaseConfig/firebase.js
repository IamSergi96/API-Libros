
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC1soP31Dglzz8Befw_kGB4KUBLyNVTEdY",
  authDomain: "pruebatecnica1-28893.firebaseapp.com",
  databaseURL: "https://pruebatecnica1-28893-default-rtdb.firebaseio.com",
  projectId: "pruebatecnica1-28893",
  storageBucket: "pruebatecnica1-28893.appspot.com",
  messagingSenderId: "126787418744",
  appId: "1:126787418744:web:6a621cff2f2c310ade8b8d",
  measurementId: "G-DMYNRXTCK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);