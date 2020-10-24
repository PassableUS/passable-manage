import React, { useEffect } from 'react';

// Firebase imports
import firebase from 'firebase/app';
require('firebase/auth');
require('firebase/firestore');

// Firebase configuration provided to us by the app creation process
export const firebaseConfig = {
  apiKey: 'AIzaSyCNndD1hMiAR-yRuuLxSjRvViQGwcvLO0U',
  authDomain: 'safepass-76e29.firebaseapp.com',
  databaseURL: 'https://safepass-76e29.firebaseio.com',
  projectId: 'safepass-76e29',
  storageBucket: 'safepass-76e29.appspot.com',
  messagingSenderId: '1063383168752',
  appId: '1:1063383168752:web:1a3cad3e80d7c3df877435',
  measurementId: 'G-SS5PFW3G9L',
};

// Initializes Firebase and creates an app instance
try {
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
} catch (err) {
  // Catches 'already initialized' errors and logs it to enable hot reloading to continue to work
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error raised', err.stack);
  }
}

export const auth = firebase.auth();
export const db = firebase.firestore();

const FirebaseAuthentication: React.FC = () => {
  const handleSession = (userUid: string) => {
    console.log('Setting Session State from Firestore for Uid: ' + userUid + '...');
    db.collection('users')
      .doc(userUid)
      .get()
      .then((doc) => {
        // Fetch school info
        const userDocument = doc.data();
        // const schoolPath = userDocument?.school.path;

        // Operate on user profile data
      })
      .catch((e) => alert('Something went wrong during initialization. Error Message: ' + e));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      // This block is only executed if we are authenticated with Firebase. As a result of authenticating, we will try to fetch/sign in to our server.
      if (user) {
        // dispatch(setupFirebaseUid(user.uid));
        handleSession(user.uid);
      } else {
        // Data is cleared 5 seconds after sign out
        setTimeout(() => {
          // dispatch(signedOut());

          console.log('Dispatched sign out');
        }, 5000);
      }
    });

    return unsubscribe;
  });

  return null;
};

export default FirebaseAuthentication;
