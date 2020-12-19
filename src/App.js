import React, {Component} from 'react';
import Map from './Map.js';
import NavBar from './NavBar.js';
import HeroBanner from './HeroBanner.js';
import PlaceHolder from './PlaceHolder.js';
import RSVP from './RSVP.js'
import PhotoGrid from './PhotoGrid.js'


export class Page extends Component {
		render() {
			return (
				<div>
					<NavBar/>
					<a id="hero"><HeroBanner image="images/couple_croped_gray.jpg" title="Save the date." date="Oct 17th 2021" event="The wedding of Justin Oakes and Madeline Hudson"/></a>
					<a id="map"><Map/></a>
					{/* <a id="photos"><PhotoViewer title="Photos"/></a> */}
					<a id="photos"><PhotoGrid title="Photos"/></a>
					<a id="RSVP"><RSVP/></a>
 					{/* <a id="stream"><PlaceHolder title="Live Stream" message="Come back here the day of the wedding to watch live"/></a> */}
				</div>
			);
	}
}