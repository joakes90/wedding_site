import React, {Component} from 'react';
import styles from './CSS/map.module.css';
import GoogleMapReact from 'google-map-react';


const location = {
	center: {
	  lat: 35.6596479,
	  lng: -97.4587054
	},
	zoom: 18
};

export default class Map extends Component {
		  
	render() {
		return (
			<a id="map">
				<div className={styles.container} id="map">
				<h3 className={styles.title}>Blueberry Hills</h3>
					<GoogleMapReact
					  bootstrapURLKeys={{ key: "API Key"}}
					  defaultCenter={location.center}
					  defaultZoom={location.zoom}>
					  
					  	<img src="images/pin.png"
					  		lat={location.center.lat}
            				lng={location.center.lng}
           					 text="Venue"
					  	/>
					</GoogleMapReact>
				</div>
			</a>
		);
	}
}