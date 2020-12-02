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
	constructor(props) {
		super(props)
		this.routeToMaps = this.routeToMaps.bind(this);
	}

	routeToMaps = () => window.location="https://www.google.com/maps/dir//Forest+Park,+OK/@35.4999509,-97.4544873,15.38z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87b217f8f75e2757:0x9d503000d3ebf255!2m2!1d-97.4461485!2d35.5042269";
	
	componentDidMount() {
		console.log("I mounted");
	}
	
	render() {
		return (
			<a id="map">
				<div className={styles.container}>
				<h3 className={styles.title}>Blueberry Hills</h3>
				<p className={styles.directions}>Double click marker for directions</p>
					<GoogleMapReact
					  bootstrapURLKeys={{ key: "API Key"}}
					  defaultCenter={location.center}
					  defaultZoom={location.zoom}
					  on>
					  
					  	<img src="images/pin.png"
					  		lat={location.center.lat}
            				lng={location.center.lng}
           					 text="Venue"
           					 onDoubleClick={this.routeToMaps}
					  	/>
					</GoogleMapReact>
				</div>
			</a>
		);
	}
}