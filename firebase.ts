import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAExmB_U_117CSnVFo9xhcbOF_UIz7SLws",
  authDomain: "family-tracker-887c6.firebaseapp.com",
  projectId: "family-tracker-887c6",
  storageBucket: "family-tracker-887c6.firebasestorage.app",
  messagingSenderId: "356756563692",
  appId: "1:356756563692:web:ffb36a2557660d8d3e67c9"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db: Firestore = getFirestore(app); 