import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: 'AIzaSyAm-ImKTdIwJbHbC-XHEL9MfhgjK78-paM',
    authDomain: 'reduxloginform.firebaseapp.com',
    databaseURL: 'https://reduxloginform.firebaseio.com',
    projectId: 'reduxloginform',
    storageBucket: 'reduxloginform.appspot.com',
    messagingSenderId: '764099033763',
    appId: '1:764099033763:web:23ec6725a8a9703a351d16',
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const firebaseAuth= firebaseApp.auth()
