import React, {Component} from 'react';
import styles from './CSS/wedding.module.css';

export default class NavBar extends Component {
	
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<ul className={styles.navigationBarItems}>
				<a href="#hero"><li>Save the Date</li></a>
				<a href="#map"><li>Location</li></a>
				<a href="#photos"><li>Photos</li></a>
				{this.props.showRSVP ? <a href="#RSVP"><li>RSVP</li></a> : null}
				<a href="#Registry"><li>Registry</li></a>
			</ul>
		);
	}
}