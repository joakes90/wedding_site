import React, {Component} from "react";
import RSVPDataService from "./Services/RSVPDataService.js";
import styles from './CSS/rsvp.module.css';
export default class RSVP extends Component {

	constructor(props) {
		super(props)
		
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeAttending = this.onChangeAttending.bind(this);
		this.onChangePlusOne = this.onChangePlusOne.bind(this);
		this.onMessageChange = this.onMessageChange.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);

		this.state = {
			name: "",
			message: "",
			email: "",
			isAttending: false,
			hasPlusOne: false,
			dateSubmitted: Date()
		};
	}
	
	onChangeName(event) {
		this.setState({
			name: event.target.value
		});
	}
	
	onChangeEmail(event) {
		this.setState({
			email: event.target.value
		});
	}
	onChangeAttending(event) {
		this.setState({
			isAttending: event.target.value
		});
	}
	
	onChangePlusOne(event) {
		this.setState({
			hasPlusOne: event.target.value
		});
	}
	
	onMessageChange(event) {
		this.setState({
			message: event.target.value
		});
	}

	saveGuest() {
		console.log(this.state);
	}
	
	render() {
		return(
			<div className={styles.container}>
				<h3 className={styles.title}>RSVP</h3>
				<form>
					<label for="name">Guest name </label>
					<input type="text" id="name" name="name" requiered minlenght="3" maxlength="30" size="10" placeholder="Name"/>
					<br/>
					<label for="email">Email where you can be reached if needed (optional) </label>
					<input type="email" id="email" name="email" placeholder="johndoe@example.com"/>
					<br/>
					<label for="attending"> Will you be attending? </label>
					<input type="checkbox" id="attending" name="attending"/>
					<br/>
					<label for="plusone"> Will you need a plus one? </label>
					<input type="checkbox" id="onemore" name="onemore"/>
					<br/>
					<label for="message" id="message"> Any special requests to messages to the brid and groom? </label>
					<br/>
					<textarea id="message" name="message" maxlength="280"/>
					<br/>
					<input type="submit"/>
				</form>
			</div>
		);
	}
}