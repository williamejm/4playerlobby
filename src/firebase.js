// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFFciY2b0fZTWiw70r3BaukgsjMe-HGEU",
  authDomain: "playerlobby-cde68.firebaseapp.com",
  projectId: "playerlobby-cde68",
  storageBucket: "playerlobby-cde68.appspot.com",
  messagingSenderId: "794258663085",
  appId: "1:794258663085:web:29115902a3f9ef98f00824",
  measurementId: "G-9B8525H4WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)