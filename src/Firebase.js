import firebase from "firebase/app";
import "firebase/firestore";

let config = {
	apiKey: process.env.REACT_APP_FIREBASEKEY,
	authDomain: "wedding-site-297322.firebaseapp.com",
	projectId: "wedding-site-297322",
	storageBucket: "wedding-site-297322.appspot.com",
	messagingSenderId: "550079494421",
	appId: process.env.REACT_APP_FIREBASEID,
};

firebase.initializeApp(config);

export default firebase.firestore();