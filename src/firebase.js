import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXEIsNQ1hu6Hq_TDkpVQRqFVM0GDe4BAE",
    authDomain: "linkedin-clone-50ba1.firebaseapp.com",
    projectId: "linkedin-clone-50ba1",
    storageBucket: "linkedin-clone-50ba1.appspot.com",
    messagingSenderId: "829037227312",
    appId: "1:829037227312:web:7a449c247ec5bc890a6cf5",
    measurementId: "G-PN79VVSR28"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;


