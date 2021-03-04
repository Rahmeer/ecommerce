import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';
const config = {
  apiKey: 'AIzaSyCzoEOJhatQms3eaR1gdvhBgKHxQqsqHP4',
  authDomain: 'e-commerce-769da.firebaseapp.com',
  projectId: 'e-commerce-769da',
  storageBucket: 'e-commerce-769da.appspot.com',
  messagingSenderId: '698580094011',
  appId: '1:698580094011:web:d0e7f1298716d2cfc3e01e',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
