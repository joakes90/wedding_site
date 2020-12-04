import React, {Component} from 'react';
import Map from './Map.js';
import NavBar from './NavBar.js';
import HeroBanner from './HeroBanner.js';
import PlaceHolder from './PlaceHolder.js';
import RSVP from './RSVP.js'


export class Page extends Component {
		render() {
			return (
				<div>
					<NavBar/>
					<a id="hero"><HeroBanner image="images/couple.jpg" title="Save the date." date="Sept 5th 2021" event="The wedding of Justin Thomas Oakes and Madeline Elizabeth Hudson"/></a>
					<a id="map"><Map/></a>
					<a id="photos"><PlaceHolder title="Photos" message="Check back here after the big day for pics of the event"/></a>
					<a id="RSVP"><RSVP/></a>
 					{/* <a id="stream"><PlaceHolder title="Live Stream" message="Come back here the day of the wedding to watch live"/></a> */}
				</div>
			);
	}
}