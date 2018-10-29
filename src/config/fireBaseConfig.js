 
 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 // Initialize Firebase
const config = {
    apiKey: "AIzaSyCxp6guvmxQqUOZPoLB4WRum3x5fBkPdzE",
    authDomain: "jt-marioplan.firebaseapp.com",
    databaseURL: "https://jt-marioplan.firebaseio.com",
    projectId: "jt-marioplan",
    storageBucket: "",
    messagingSenderId: "527309144429"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;

