import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc 
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Importer Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyA0uK1phCpBIHl5_3bHgpFA1oenvSrNK7w",
  authDomain: "ccca-90df0.firebaseapp.com",
  projectId: "ccca-90df0",
  storageBucket: "ccca-90df0.appspot.com",
  messagingSenderId: "936445795250",
  appId: "1:936445795250:web:0dbd5e0e3365f3126fa2ab",
  measurementId: "G-7HHN7E8JE3"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Initialisation des services Firebase
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app); // Initialisation de Firebase Storage
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const functions = getFunctions(app);
export const provider = new GoogleAuthProvider();
// Export des fonctions et des services
export {
  auth,
  firestore,
  db,
  functions,
  doc,
  getDoc,
  setDoc,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  storage // Exporter Firebase Storage
};
