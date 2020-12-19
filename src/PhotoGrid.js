import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './CSS/wedding.module.css';
import PhotoViewer from './PhotoViewer.js';

export default class PhotoGrid extends Component {

	constructor(props) {
		super(props);
		
		this.onImgClick = this.onImgClick.bind(this);
		this.dismissViewer = this.dismissViewer.bind(this);
	}

	dismissViewer() {
		ReactDOM.unmountComponentAtNode(document.getElementById('viewer_container'))
	}

	onImgClick(event) {
		let imageIndex = event.target.id;
		console.log(imageIndex);
		let viewer = <PhotoViewer startIndex={imageIndex == 0 ? null : imageIndex} dismiss={this.dismissViewer} id="viewer"/>
		ReactDOM.render(viewer, document.getElementById('viewer_container'));
	}
	
	
	render() {
		return (
			<div className={styles.container}>
				<h3 className={styles.title}>{this.props.title}</h3>
				<div className={styles.photoGrid}>
					<img src="images/viewer_images/thumbnails/IMG_1591_thumbnail.jpeg" onClick={this.onImgClick} id={0}/>
					<img src="images/viewer_images/thumbnails/IMG_1534_thumbnail.jpeg" onClick={this.onImgClick} id={1}/>
					<img src="images/viewer_images/thumbnails/IMG_1505_thumbnail.jpeg" onClick={this.onImgClick} id={2}/>
					<img src="images/viewer_images/thumbnails/IMG_1485_thumbnail.jpeg" onClick={this.onImgClick} id={3}/>
					<img src="images/viewer_images/thumbnails/IMG_1479_thumbnail.jpeg" onClick={this.onImgClick} id={4}/>
					<img src="images/viewer_images/thumbnails/IMG_1456_thumbnail.jpeg" onClick={this.onImgClick} id={5}/>
					<img src="images/viewer_images/thumbnails/IMG_1326_thumbnail.jpeg" onClick={this.onImgClick} id={6}/>
					<img src="images/viewer_images/thumbnails/IMG_1311_thumbnail.jpeg" onClick={this.onImgClick} id={7}/>
					<img src="images/viewer_images/thumbnails/IMG_1293_thumbnail.jpeg" onClick={this.onImgClick} id={8}/>
				</div>
			</div>
		
		);
	}
}