import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYktEOWeLY3E3otHGapikytAkyfcqJOfM",
  authDomain: "twitter-clone-1ecc5.firebaseapp.com",
  databaseURL: "https://twitter-clone-1ecc5-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-1ecc5",
  storageBucket: "twitter-clone-1ecc5.appspot.com",
  messagingSenderId: "140885809325",
  appId: "1:140885809325:web:142d97c7925792fe450e24",
  measurementId: "G-G55PDBKQPP"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;