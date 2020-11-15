import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDz6nVD5nvx1CDZkdeAZEeeX5065w6oW9Y",
    authDomain: "wireless-library-86b87.firebaseapp.com",
    databaseURL: "https://wireless-library-86b87.firebaseio.com",
    projectId: "wireless-library-86b87",
    storageBucket: "wireless-library-86b87.appspot.com",
    messagingSenderId: "762056232231",
    appId: "1:762056232231:web:9878c692619a2e2470ed02"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()