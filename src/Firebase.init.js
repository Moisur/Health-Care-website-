// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc2KqO1f-JksqEuUJYoYzT12QoQlwfXwo",
  authDomain: "health-care-services-67358.firebaseapp.com",
  projectId: "health-care-services-67358",
  storageBucket: "health-care-services-67358.appspot.com",
  messagingSenderId: "69554751961",
  appId: "1:69554751961:web:19459a8c87d73f5e86b1c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;