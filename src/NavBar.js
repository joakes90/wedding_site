import React, {Component} from 'react';
import styles from './CSS/wedding.module.css';

export default class NavBar extends Component {
	
	render() {
		
		return (
			<ul className={styles.navigationBarItems}>
				<a href="#hero"><li>Save the Date</li></a>
				<a href="#map"><li>Location</li></a>
				<a href="#photos"><li>Photos</li></a>
				{/*<a href="#stream"><li>Live Stream</li></a> */}
				<a href="#RSVP"><li>RSVP</li></a>
				<a href="#RSVP"><li>Registry</li></a>
			</ul>
		);
	}
}