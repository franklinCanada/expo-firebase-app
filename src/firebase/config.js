import firebase from "firebase";
import "@firebase/auth";
import "@firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDd4jGrxI2vjexJ2rg6SKVOfF7SYk8xUzo",
  authDomain: "popup-app-509d3.firebaseapp.com",
  projectId: "popup-app-509d3",
  storageBucket: "popup-app-509d3.appspot.com",
  messagingSenderId: "497721069233",
  appId: "1:497721069233:web:b41bbec51d9f0e9e3e9c90",
  measurementId: "G-8DCPSV3NXS",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
