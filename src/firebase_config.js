import firebase from  "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyBOoZI86yPo-mP3OnRYHbuTMkQxetVIsis",
    authDomain: "todoapp-e8fb9.firebaseapp.com",
    projectId: "todoapp-e8fb9",
    storageBucket: "todoapp-e8fb9.appspot.com",
    messagingSenderId: "445079987589",
    appId: "1:445079987589:web:8c581cd1f0fb03827190ec"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export {db}