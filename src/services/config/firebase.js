import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqG5p7fF5OZNOKga-lFsMhFsQ3_hiccQ0",
  authDomain: "finalproyect-reactjs-saavedra.firebaseapp.com",
  projectId: "finalproyect-reactjs-saavedra",
  storageBucket: "finalproyect-reactjs-saavedra.firebasestorage.app",
  messagingSenderId: "532458896314",
  appId: "1:532458896314:web:76527405e2c3f13d533b83"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);