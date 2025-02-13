import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfUsKceK_eL7u7_uiJaymlTnLMvQ8GTFc",
  authDomain: "invitation-ad2bc.firebaseapp.com",
  projectId: "invitation-ad2bc",
  storageBucket: "invitation-ad2bc.firebasestorage.app",
  messagingSenderId: "1059354493047",
  appId: "1:1059354493047:web:84285f6f777dadcb0f4672",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
