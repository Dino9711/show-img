import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPYqpIf9pfU3eY1OA6xve7yGb6rkmspOg",
    authDomain: "showimg-81911.firebaseapp.com",
    projectId: "showimg-81911",
    storageBucket: "showimg-81911.appspot.com",
    messagingSenderId: "432637549835",
    appId: "1:432637549835:web:b6138d259e53232023960e"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db}