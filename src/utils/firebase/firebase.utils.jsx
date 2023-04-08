import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyBo7yGvR92PRrkNe8NLPLoUmmfaFW7i9to",
  
    authDomain: "crwn-style-db.firebaseapp.com",
  
    projectId: "crwn-style-db",
  
    storageBucket: "crwn-style-db.appspot.com",
  
    messagingSenderId: "124601411539",
  
    appId: "1:124601411539:web:68690b57a64e2e4da9b126"
  
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();//provider instance

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log('userDocRef ===', userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log('userSnapshot ===', userSnapshot.exists());

  //user data exist
  //data does nt exist -- create
  if(!userSnapshot.exists()) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }catch(err) {
      console.log(err.message);
    }
  }

  return userDocRef;
}