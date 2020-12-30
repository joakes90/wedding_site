import firebase from "firebase/app";
import "firebase/firestore";

let config = {
	apiKey: process.env.REACT_APP_FIREBASEKEY,
	authDomain: process.env.REACT_APP_AUTHDOMAIN,
	projectId: process.env.REACT_APP_PROJECTID,
	storageBucket: process.env.REACT_APP_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_FIREBASEID,
};

firebase.initializeApp(config);

export default firebase.firestore();