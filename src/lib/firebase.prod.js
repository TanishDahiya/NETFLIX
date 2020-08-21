import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCapaJt-C4Eo8UkIe0YF3LWAc7xV11mvIA",
  authDomain: "netflix-49fb7.firebaseapp.com",
  databaseURL: "https://netflix-49fb7.firebaseio.com",
  projectId: "netflix-49fb7",
  storageBucket: "netflix-49fb7.appspot.com",
  messagingSenderId: "440550333139",
  appId: "1:440550333139:web:4197ab3228930b73cf5226",
  measurementId: "G-VY4K7PMB8F",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
