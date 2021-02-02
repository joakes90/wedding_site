import React, {Component} from "react";
import styles from './CSS/wedding.module.css';
import rsvp_styles from './CSS/rsvp.module.css';

export default class Party extends Component {
	
	render() {
		return(
			<div className={rsvp_styles.container}>
				<h3 className={styles.title}>Bridal Party</h3>
				<div class={styles.box}>
				
				</div>	
			</div>
		);
	}
}