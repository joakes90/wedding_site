import React, {Component} from 'react';
import styles from './CSS/wedding.module.css';

export default class NavBar extends Component {
	
	render() {
		
		return (
			<ul className={styles.navigationBarItems}>
				<li>Save the Date</li>
				<a href="#map"><li>Location</li></a>
				<li>Photos</li>
				<li>Live Stream</li>
				<li>RSVP</li>
				<li>Donate</li>
			</ul>
		);
	}
}