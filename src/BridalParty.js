import React, {Component} from "react";
import PartyMember from './PartyMember.js';
import styles from './CSS/wedding.module.css';
import rsvp_styles from './CSS/rsvp.module.css';

export default class Party extends Component {
	
	render() {
		return(
			<div>
				<h3 className={styles.title}>Bridal Party</h3>
				<div class={styles.bridalGrid}>
				<PartyMember image="images/bre.png" name="Bri Brown" title="Maid of Honor"/>
				<PartyMember image="images/josh.png" name="Josh Oakes" title="Best Man"/>
				<PartyMember image="images/molly.png" name="Molly Hudson" title="Bride's Maid"/>
				<PartyMember image="images/pat.png" name="Patrick Lamascus" title="Groomsman"/>
				</div>	
			</div>
		);
	}
}