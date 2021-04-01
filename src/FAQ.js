import React, {Component} from "react";
import styles from './CSS/wedding.module.css';
import rsvp_styles from './CSS/rsvp.module.css';

export default class FAQ extends Component {
	
	render() {
		return(
			<div className={rsvp_styles.container}>
				<h3 className={styles.title}>FAQ</h3>
				<div class={styles.box}>
					<h4>When is the deadline to RSVP?</h4>
					<p>&emsp; We kindly ask that you make you reply with your RSVP no later
					 than Friday September 30th. This helps us insure we are able have seating,
					  catering and other accommodations accounted for all of our guests. 
					  While you're here why not complete your RSVP on the form below.</p> 
					
					<h4>What is the dress code?</h4>
					<p>&emsp; This will be a formal event. While black tie is not strictly required it is appreciated.</p>
					
					<h4>What is the parking situation?</h4>
					<p>&emsp; Complementary valet parking will be provided.</p>
					
					<h4>Is the venue wheelchair accessible?</h4>
					<p>&emsp; If you will need help getting around the club let us know. Golf carts 
					will be available to take guests with limited mobility to the location 
					of the ceremony and reception.</p>
					
					<h4>What if it rains?</h4>
					<p>&emsp; Mid October should bring mild weather for the wedding. 
					An outdoor ceremony is planned, but should that not be possible because 
					of rain, inclement weather or other reasons the ceremony may be moved inside. 
					The final decision will be made closer to the date of the wedding when 
					a more accurate forecast will be available.The majority of the reception 
					is expected to take place inside with some outdoor access.</p>
					
					<h4>Covid-19</h4>
					<p>&emsp; COVID-19 vaccination will be required for attendance by all persons able to receive it. If you are immune compromised or otherwise unable to be vaccinated by October 1st 2021 please leave a message with your RSVP below and the bride will contact you to help organize a solution to insure your attendance is safe for both yourself and the other guests.</p>
				</div>
			</div>
		);
	}
}