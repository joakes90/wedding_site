import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Map from './Map.js';
import NavBar from './NavBar.js';
import Party from './BridalParty.js';
import HeroBanner from './HeroBanner.js';
import RSVP from './RSVP.js';
import RSVPClosed from './RSVPClosed.js';
import FAQ from './FAQ.js';
import PhotoGrid from './PhotoGrid.js';
import Footer from './Footer.js';
import HashTag from './HashTag.js';
import Registry from './Registry.js';

export class Page extends Component {

	constructor(props) {
		super(props)
		
		this.state = {
			showRSVP: true
		};
		
		this.removeRSVP = this.removeRSVP.bind(this);
	}
		removeRSVP() {
			this.setState({
				showRSVP: false
			});
			let rsvpView = document.getElementById("rsvp_container");
			ReactDOM.unmountComponentAtNode(document.getElementById("rsvp_container"));
		}

		render() {
			return (
				<div>
					<NavBar showRSVP={this.state.showRSVP}/>
					<HashTag/>
					<a id="hero"><HeroBanner image="images/masthead.jpg" title="Save the date." date="Oct 17th 2021" event="The wedding of Justin Oakes and Madeline Hudson"/></a>
					<a id="map"><Map/></a>
					<a id="photos"><PhotoGrid title="Photos"/></a>
					<a id="party"><Party/></a>
					<a id="FAQ"><FAQ/></a>
					<a id="RSVP"><RSVPClosed/></a>
					<a id="Registry"><Registry/></a>
					<Footer/>
				</div>
			);
	}
}