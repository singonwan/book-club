import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCeNugv47Blpoee_uLvqSTBekmMqdQzcAM",
    authDomain: "bookclub-gwan.firebaseapp.com",
    databaseURL: "https://bookclub-gwan.firebaseio.com",
    projectId: "bookclub-gwan",
    storageBucket: "",
    messagingSenderId: "525038370912",
    appId: "1:525038370912:web:4dbf2a612d5a8837"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;