import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA70QSY0c1Pnbf9pot0b4GxEGtrb42u3eI",
  databaseURL: "https://rotina-2-49422-default-rtdb.firebaseio.com/",
  authDomain: "rotina-2-49422.firebaseapp.com",
  projectId: "rotina-2-49422",
  storageBucket: "rotina-2-49422.firebasestorage.app",
  messagingSenderId: "104531163431",
  appId: "1:104531163431:web:dea3a58a431b0201581102",
  measurementId: "G-NN74Y9WFXN"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);