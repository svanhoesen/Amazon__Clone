// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCT4dN8XsSW5ZQwOkwvzFZ1h81xLMAYRrY",
    authDomain: "clone-1d859.firebaseapp.com",
    projectId: "clone-1d859",
    storageBucket: "clone-1d859.appspot.com",
    messagingSenderId: "438184208026",
    appId: "1:438184208026:web:34c677cc72602dcc64a123",
    measurementId: "G-14VQ3JSQFL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };