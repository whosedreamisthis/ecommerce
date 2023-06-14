import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJmWWKZQz0ESGJ3bvR0Utbs5KuexvN3mo",
  authDomain: "ecommerce-db-6c410.firebaseapp.com",
  projectId: "ecommerce-db-6c410",
  storageBucket: "ecommerce-db-6c410.appspot.com",
  messagingSenderId: "294336704250",
  appId: "1:294336704250:web:5101f480f4c7d3daa9e343",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log("user doc ref" + userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
  // if user data exists
  //return userDocRef
};

export const createAuthUserWithEmailAndPassowrd = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
