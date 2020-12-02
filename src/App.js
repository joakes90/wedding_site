import React, {Component} from 'react';
import styles from './CSS/wedding.module.css';
import Map from './Map.js';

export class NavBar extends Component {
	
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

export class HeroBanner extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.heroBanner} id="saveDate">
				<img src={this.props.image} alt="Hero"/>
				<h2>
					{this.props.event}
					<br/>
					{this.props.date}
				</h2>
			</div>
		);
	}
}

export class Page extends Component {

	constructor(props) {
		super(props);
	}

		render() {
			return (
				<div>
					<NavBar/>
					<HeroBanner image="images/couple.jpg" title="Save the date." date="Sept 5th 2021" event="The wedding of Justin Thomas Oakes and Madeline Elizabeth Hudson"/>
					<Map/>
				</div>
			);
	}
}