import React, {Component} from "react";
import RSVPDataService from "./Services/RSVPDataService.js";
import styles from './CSS/rsvp.module.css';
export default class RSVP extends Component {

	constructor(props) {
		super(props)
		
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeAttending = this.onChangeAttending.bind(this);
		this.onChangePlusOne = this.onChangePlusOne.bind(this);
		this.onChangeMessage = this.onChangeMessage.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.saveGuest = this.saveGuest.bind(this);

		this.state = {
			name: "",
			message: "",
			email: "",
			isAttending: false,
			hasPlusOne: false,
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
			isAttending: event.target.checked
		});
	}
	
	onChangePlusOne(event) {
		this.setState({
			hasPlusOne: event.target.checked
		});
	}
	
	onChangeMessage(event) {
		this.setState({
			message: event.target.value
		});
	}

	saveGuest() {
		console.log(this.state);
		let data = {
			name: this.state.name,
			message: this.state.message,
			email: this.state.email,
			attending: this.state.isAttending,
			plusOne: this.state.hasPlusOne,
			submittedDate: new Date()
		};
		
		RSVPDataService.create(data)
		.then(() => {
			console.log("New item created");
			// TODO: Show a toast for successful submission
		})
		.catch((e) => {
			console.log(e);
			// TODO: Show alert with error
		});
	}
	
	render() {
		return(
			<div className={styles.container}>
				<h3 className={styles.title}>RSVP</h3>
				<form>
					<label for="name">Guest name </label>
					<input
					 	type="text"
					 	id="name"
					 	name="name"
					 	requiered
					 	minlenght="3"
					 	maxlength="30"
					 	placeholder="Name"
					 	onChange={this.onChangeName}
					 	value={this.state.name}
					/>
					<br/>
					<label for="email">Email where you can be reached if needed (optional) </label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="johndoe@example.com"
						onChange={this.onChangeEmail}
						value={this.state.email}
					/>
					<br/>
					<label for="attending"> Will you be attending? </label>
					<input
						type="checkbox"
						 id="attending"
						 name="attending"
						 onChange={this.onChangeAttending}
						 value={this.state.isAttending}
					/>
					<br/>
					<label for="plusone"> Will you need a plus one? </label>
					<input
						type="checkbox"
						id="onemore"
						name="onemore"
						onChange={this.onChangePlusOne}
						value={this.state.hasPlusOne}
					/>
					<br/>
					<label for="message" id="message"> Any special requests to messages to the brid and groom? </label>
					<br/>
					<textarea
						id="message"
						name="message"
						maxlength="280"
						placeholder="Enter a tweet length comment here (optional)"
						onChange={this.onChangeMessage}
						value={this.state.message}
					/>
					<br/>
					<input 
						type="button"
						value="Submit"
						onClick={this.saveGuest}
					/>
				</form>
			</div>
		);
	}
}