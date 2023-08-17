// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeCgZuUtQjhYr1d0AZC-ASo8iZKo4R1ro",
  authDomain: "abhay-react-portfolio.firebaseapp.com",
  projectId: "abhay-react-portfolio",
  storageBucket: "abhay-react-portfolio.appspot.com",
  messagingSenderId: "617864498973",
  appId: "1:617864498973:web:cf3badcf508d49ae74dbf4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
