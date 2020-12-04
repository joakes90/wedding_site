import firebase from "../Firebase.js";

const db = firebase.collection("/guests")

class RSVPDataService {

	create(guest) {
		return db.add(guest);
	}
}

export default new RSVPDataService();