import fb from "firebase/app"
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyC-Ri3HgM-g2QEfxMUaJNM4xlpuaCnvGx4",
  authDomain: "emedcare-vanan.firebaseapp.com",
  databaseURL: "https://emedcare-vanan.firebaseio.com",
  projectId: "emedcare-vanan",
  storageBucket: "emedcare-vanan.appspot.com",
  messagingSenderId: "143873937314",
  appId: "1:143873937314:web:c3dbf2e1f09cf2ed89acfb"
};

const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app();

const googleProvider = new fb.auth.GoogleAuthProvider();

const firebaseAuth = firebase?.auth()

export { firebase, googleProvider, fb, firebaseAuth };