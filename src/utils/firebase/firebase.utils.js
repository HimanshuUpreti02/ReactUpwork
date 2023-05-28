import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC5RxA95NMpV1rXELnJ0StjjomeXBZLPug",
  authDomain: "ecommerce-db-1989a.firebaseapp.com",
  projectId: "ecommerce-db-1989a",
  storageBucket: "ecommerce-db-1989a.appspot.com",
  messagingSenderId: "117736432515",
  appId: "1:117736432515:web:4f8102435bbeacd85d4cb6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp); 

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getDatabase();

export const createUserDocFromAuth = async (userAuth , additionalInfo = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async(email , password)=>{
  if(!email || !password)return;
  return await createUserWithEmailAndPassword(auth , email , password);
}

export const signInAuthUserWithEmailAndPassword = async(email , password)=>{
  if(!email || !password)return;
  return await signInWithEmailAndPassword(auth , email , password);
}