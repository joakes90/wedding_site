import React, {Component} from 'react';
import styles from './CSS/wedding.module.css';

export class NavBar extends Component {
	
	render() {
		
		return (
			<ul className={styles.navigationBarItems}>
				<li>Save the Date</li>
				<li>Our Story</li>
				<li>Location</li>
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
			<div>
				<img src={this.props.image} alt="Hero"/>
				<h2>{this.props.title}</h2>
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
					<HeroBanner image="images/couple.jpg" title="The Wedding of Justin Thomas Oakes and Madeline Elizabeth Hudson"/>
				</div>
			);
	}
}