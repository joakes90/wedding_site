import firebase from "../Firebase.js";

const db = firebase.collection("/guests")

class RSVPDataService {

	create(guest) {
	if (process.env.REACT_APP_STORAGEBUCKET === undefined) {
		throw "Firebase not configured";
	}
		return db.add(guest);
	}
}

export default new RSVPDataService();