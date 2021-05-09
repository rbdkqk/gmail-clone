import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDqgh2jIPv-dyRRww5zdYqGrCtc4AerZAs',
  authDomain: 'clone-53764.firebaseapp.com',
  projectId: 'clone-53764',
  storageBucket: 'clone-53764.appspot.com',
  messagingSenderId: '250415827563',
  appId: '1:250415827563:web:e358ab9486a91ae7b0ff2e',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
