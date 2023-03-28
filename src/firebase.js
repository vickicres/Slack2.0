import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWQaAXauVKW8sxUK6488WxRZvj4Rd1NBA",
  authDomain: "slack-clone-871bd.firebaseapp.com",
  projectId: "slack-clone-871bd",
  storageBucket: "slack-clone-871bd.appspot.com",
  messagingSenderId: "184968554810",
  appId: "1:184968554810:web:67e801bcf4e9e334788803"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };