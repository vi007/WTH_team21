import firebase from "firebase/app";
import "firebase/auth";

  var config = {
    apiKey: "AIzaSyCl93I-hhD_cBr_DrTlXcBzmq8rSKZwskU",
    authDomain: "whatthehack-e9968.firebaseapp.com",
    databaseURL: "https://whatthehack-e9968.firebaseio.com",
    projectId: "whatthehack-e9968",
    storageBucket: "whatthehack-e9968.appspot.com",
    messagingSenderId: "869306537273"
  };
  const fire = firebase.initializeApp(config);
  export default fire;
