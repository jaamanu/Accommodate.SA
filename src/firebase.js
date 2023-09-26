// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATwaWlocQJ8FdTEPSnlRnI60H7_uSUI30",
  authDomain: "realtor-cloned.firebaseapp.com",
  projectId: "realtor-cloned",
  storageBucket: "realtor-cloned.appspot.com",
  messagingSenderId: "282915570149",
  appId: "1:282915570149:web:b32be87b1cb5946562ef0c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()