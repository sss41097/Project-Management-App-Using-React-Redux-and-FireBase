import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyBYXZndIzkq6_m6ltP8BJ7wSQzSByhIBls",
    authDomain: "project-management-app-1f1aa.firebaseapp.com",
    databaseURL: "https://project-management-app-1f1aa.firebaseio.com",
    projectId: "project-management-app-1f1aa",
    storageBucket: "project-management-app-1f1aa.appspot.com",
    messagingSenderId: "841850215649",
    appId: "1:841850215649:web:3783131e43f65d6a876ba0",
    measurementId: "G-486JV1X5J7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase