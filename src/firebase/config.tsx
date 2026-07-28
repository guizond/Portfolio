import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsVKfcwxCzsWYFRL6cYGFZiisR1D2WMjw",
  authDomain: "countinz-d2698.firebaseapp.com",
  projectId: "countinz-d2698",
  storageBucket: "countinz-d2698.firebasestorage.app",
  messagingSenderId: "348133817101",
  appId: "1:348133817101:web:0fd044233db012c72dce44",
  measurementId: "G-Y0614DKDXT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export { db }