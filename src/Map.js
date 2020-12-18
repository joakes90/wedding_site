import React, {Component} from 'react';
import styles from './CSS/map.module.css';
import GoogleMapReact from 'google-map-react';


const location = {
	center: {
	  lat: 35.6174202,
	  lng: -97.6141328
	},
	zoom: 14.75
};

export default class Map extends Component {
	constructor(props) {
		super(props)
		this.routeToMaps = this.routeToMaps.bind(this);
	}

	routeToMaps = () => window.location="https://www.google.com/maps/dir//Gaillardia+Country+Club,+5300+Gaillardia+Blvd,+Oklahoma+City,+OK+73142/@35.6156627,-97.6179349,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87b20336a258306b:0x76000b815d44309f!2m2!1d-97.6157409!2d35.6156627";
	
	render() {
		return (
			<div className={styles.container}>
				<h3 className={styles.title}>Gaillardia Country Club</h3>
				<p className={styles.directions}>Click marker for directions</p>
				<div className={styles.mapContainer}>
					<GoogleMapReact
					  bootstrapURLKeys={{ key: process.env.REACT_APP_GAPI}}
					  defaultCenter={location.center}
					  defaultZoom={location.zoom}
					  on>
				  
						<img src="images/pin.png"
							lat={location.center.lat + 0.003}
							lng={location.center.lng - 0.001}
							 text="Venue"
							 onClick={this.routeToMaps}
							 alt="Map marker"
						/>
					</GoogleMapReact>
				</div>
			</div>
		);
	}
}