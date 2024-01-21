import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBXhl4oyTzPZ4xL49u8LGnYACm-yBpe8ow",
  authDomain: "utrahacks.firebaseapp.com",
  databaseURL: "https://utrahacks-default-rtdb.firebaseio.com/",
  projectId: "utrahacks",
  storageBucket: "utrahacks.appspot.com",
  messagingSenderId: "241444803959",
  appId: "1:241444803959:web:4f08ccca4822d0c769fd72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
