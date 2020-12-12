import * as firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg9lauHVwcQS_d_rjQtddNLvzeEf_QVH4",
  authDomain: "furnituremagik-1405f.firebaseapp.com",
  databaseURL: "https://furnituremagik-1405f-default-rtdb.firebaseio.com",
  projectId: "furnituremagik-1405f",
  storageBucket: "furnituremagik-1405f.appspot.com",
  messagingSenderId: "312160889739",
  appId: "1:312160889739:web:ce84bdf59dcf1a03729d8e",
  measurementId: "G-HC27LHBR3Y"
};

export default (!firebase.apps.length
  ? {
      FireBaseContext: firebase.initializeApp(firebaseConfig),
      Token: localStorage.getItem("token")
    }
  : {
      FireBaseContext: firebase.app(),
      Token: localStorage.getItem("token")
    });
