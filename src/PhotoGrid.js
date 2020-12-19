import React, {Component} from 'react';
import styles from './CSS/wedding.module.css';

export default class PhotoGrid extends Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className={styles.container}>
				<h3 className={styles.title}>{this.props.title}</h3>
				<div className={styles.photoGrid}>
					<img src="images/viewer_images/thumbnails/IMG_1591_thumbnail.jpeg"/>
					<img src="images/viewer_images/thumbnails/IMG_1534_thumbnail.jpeg"/>
					<img src="images/viewer_images/thumbnails/IMG_1505_thumbnail.jpeg"/>
					<img src="images/viewer_images/thumbnails/IMG_1485_thumbnail.jpeg"/>
					<img src="images/viewer_images/thumbnails/IMG_1479_thumbnail.jpeg"/>
					<img src="images/viewer_images/thumbnails/IMG_1456_thumbnail.jpeg"/>
					<img src="images/viewer_images/thumbnails/IMG_1326_thumbnail.jpeg"/>
					<img src="images/viewer_images/thumbnails/IMG_1311_thumbnail.jpeg"/>
					<img src="images/viewer_images/thumbnails/IMG_1293_thumbnail.jpeg"/>
				</div>
			</div>
		
		);
	}
}