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
				<PartyMember image="images/bre.png" name="Bre" title="Maid of honor"/>
				<PartyMember image="images/" name="Josh" title="Best Man"/>
				<PartyMember image="images/molly.png" name="Molly" title="Bride's Made"/>
				<PartyMember image="images/" name="Patrick" title="Groomsman"/>
				</div>	
			</div>
		);
	}
}