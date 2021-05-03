import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBbEcLZI-EOVuROYw9oNOsDRPf3eZGwxHY",
    authDomain: "ninja-firegram-1b134.firebaseapp.com",
    databaseURL: "https://ninja-firegram-1b134-default-rtdb.firebaseio.com",
    projectId: "ninja-firegram-1b134",
    storageBucket: "ninja-firegram-1b134.appspot.com",
    messagingSenderId: "711766037504",
    appId: "1:711766037504:web:df26260c1da2367c9ab4e5",
    measurementId: "G-1HXJHHZQZW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
