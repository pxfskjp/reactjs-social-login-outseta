import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAQkSeqPUdW2SFP-VRMXCjjZthusRUNg88",
  authDomain: "chocomama-4af7b.firebaseapp.com",
  databaseURL: "https://chocomama-4af7b.firebaseio.com",
  projectId: "chocomama-4af7b",
  storageBucket: "chocomama-4af7b.appspot.com",
  messagingSenderId: "139803431625"
};
firebase.initializeApp(config);

export default firebase;
