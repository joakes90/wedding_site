import React, {Component} from "react";
import styles from './CSS/wedding.module.css';
import rsvp_styles from './CSS/rsvp.module.css';

export default class RSVPClosed extends Component {
	
	render() {
		return(
			<div className={rsvp_styles.container} id="rsvp_container">
				<h3 className={styles.title}>RSVP</h3>
				<div class={styles.box}>
					<h4><center>The RSVP period is now closed</center></h4>
					<p><center>If you feel this is a mistake
					or need to make changes to your response please contact us directly</center></p>
				</div>
			</div>
		);
	}
}