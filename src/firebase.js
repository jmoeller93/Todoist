import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDZWHzu8pAPB0lW10XI_YkWvjJyN9fuV1o",
  authDomain: "todoist-d7300.firebaseapp.com",
  databaseURL: "https://todoist-d7300.firebaseio.com",
  projectId: "todoist-d7300",
  storageBucket: "todoist-d7300.appspot.com",
  messagingSenderId: "1071810642534",
  appId: "1:1071810642534:web:4a5f8976c9a6ef62"
});

export { firebaseConfig as firebase };
