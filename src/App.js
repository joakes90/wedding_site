import React, {Component} from 'react';
import styles from './CSS/wedding.module.css';
import Map from './Map.js';
import NavBar from './NavBar.js';
import HeroBanner from './HeroBanner.js';



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