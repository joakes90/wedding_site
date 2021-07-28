import React, {Component} from "react";
import RSVPDataService from "./Services/RSVPDataService.js";
import styles from './CSS/wedding.module.css';
import rsvp_styles from './CSS/rsvp.module.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export default class RSVP extends Component {

	constructor(props) {
		super(props)
		
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeAttending = this.onChangeAttending.bind(this);
		this.onChangePartySize = this.onChangePartySize.bind(this);
		this.onChangeMessage = this.onChangeMessage.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.saveGuest = this.saveGuest.bind(this);
		this.onChangeVax = this.onChangeVax.bind(this);

		this.state = {
			name: "",
			message: "",
			email: "",
			state: "",
			vaccinated: "needsTest",
			isAttending: false,
			partySize: 0,
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
	let attending = event.target.checked;
	let partyFieldVaue = Number(document.getElementById('party').value);
	let party = isNaN(partyFieldVaue) ? 1 : partyFieldVaue;
			this.setState({
				isAttending: attending,
				partySize: (attending ? party : 0)
			});
	}
	
	onChangePartySize(event) {
		let fieldValue = Number(event.target.value);
		let partySize = isNaN(fieldValue) ? 1 : fieldValue;
		this.setState({
			partySize: partySize
		});
	}
	
	onChangeMessage(event) {
		this.setState({
			message: event.target.value
		});
	}

	onChangeVax(event) {
		this.setState({
			vaccinated: event.target.value
		});
	}

	saveGuest() {
		if (this.state.name === "") {
			toast.warning("Please give your name and indicate if you will be attending");
			return;
		}
		if (this.state.email === "" && this.state.isAttending) {
			toast.warning("Please provide an email where you can received updates and information about the wedding")
			return;
		}
		let vaxStatus = this.state
		let data = {
			name: this.state.name,
			message: this.state.message,
			email: this.state.email,
			attending: this.state.isAttending,
			partySize: this.state.partySize,
			vaccinated: (this.state.isAttending ? this.state.vaccinated : ""),
			submittedDate: new Date()
		};
		try {
			RSVPDataService.create(data)
			this.props.dismiss();
			toast.success("Your RSVP has been received");
		} catch(e) {
			console.log(e);
			toast.error("Your RSVP could not be sent");
		}		
	}
	
	render() {
		return(
			<div className={rsvp_styles.container} id="rsvp_container">
				<h3 className={styles.title}>RSVP</h3>
				<form>
					<label for="name">Guest name </label>
					<br/>
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
					<label for="email">Email where you can be reached </label>
					<br/>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="johndoe@example.com"
						onChange={this.onChangeEmail}
						value={this.state.email}
					/>
		
					<br/><br/>
					<label for="attending"> Will you be attending? </label>
					<br/>
					<input
						type="checkbox"
						 id="attending"
						 name="attending"
						 onChange={this.onChangeAttending}
						 value={this.state.isAttending}
					/>
					<br/>
					<label for="party"> Number of people in your party? </label>
					<br/>
					<select 
						id="party"
						name="party"
						disabled={!this.state.isAttending}
						onChange={this.onChangePartySize}
						value={this.state.partySize}
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					<br/><br/>
					<label for="vaccination" id="vaccination">Vaccination status </label>
					<br/>
					<input type="radio" name="vaccination" value="hasVax" onChange={this.onChangeVax} disabled={!this.state.isAttending} checked={this.state.vaccinated === "hasVax"}/> <p>I am fully vaccinated or will have received my final shot 2 weeks before October 17th 2021</p>
					<input type="radio" name="vaccination" value="needsTest" onChange={this.onChangeVax} disabled={!this.state.isAttending} checked={this.state.vaccinated === "needsTest"}/> <p>I will provide a negative covid test dated within 48 hours prior to the ceremony</p>
					<br/><br/>
					<label for="message" id="message"> Special requests or messages to the bride and groom? </label>
					<p>Adult reception to follow. Please make us aware of any food allergy or diatary restrictions. Let us know if there are any other accomadations that can be made to make your attendance possible or more comfertable.</p>
					<textarea
						id="message"
						name="message"
						maxlength="280"
						placeholder="Enter a tweet length comment here (optional)"
						onChange={this.onChangeMessage}
						value={this.state.message}
					/>
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
