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
		var imageIndex = event.target.id;
		let viewer = <PhotoViewer startIndex={imageIndex == 0 ? null : imageIndex} dismiss={this.dismissViewer} id="viewer"/>
		ReactDOM.render(viewer, document.getElementById('viewer_container'));
	}
	
	
	render() {
	let photos = [
			{ 'src': 'IMG_1505_thumbnail.jpeg', 'alt': '' },
			{ 'src': 'IMG_1485_thumbnail.jpeg', 'alt': '' },
			{ 'src': 'IMG_1479_thumbnail.jpeg', 'alt': '' },
			{ 'src': 'IMG_1293_thumbnail.jpeg', 'alt': '' },
			{ 'src': 'IMG_1297_thumbnail.jpeg', 'alt': '' },
			{ 'src': 'IMG_1301_thumbnail.jpeg', 'alt': '' },
			{ 'src': 'IMG_1305_thumbnail.jpeg', 'alt': '' },
			{ 'src': 'IMG_4311_thumbnail.jpeg', 'alt': '' },
			{ 'src': 'IMG_0076_thumbnail.jpeg', 'alt': '' },
			{ 'src': 'IMG_0164_thumbnail.jpeg', 'alt': '' },
			{ 'src': 'IMG_0224_thumbnail.jpeg', 'alt': '' },
			{ 'src': 'IMG_1309_thumbnail.jpeg', 'alt': '' },
			{ 'src': 'IMG_0684_thumbnail.jpeg', 'alt': '' },
			{ 'src': 'IMG_5989_thumbnail.jpeg', 'alt': '' },
			{ 'src': 'DSC_1-1_thumbnail.jpg', 'alt': '' },
			{ 'src': 'DSC_6_thumbnail.jpg', 'alt': '' },
			{ 'src': 'DSC_6663_thumbnail.jpg', 'alt': '' },
			{ 'src': 'DSC_6686_thumbnail.jpg', 'alt': '' },
			{ 'src': 'DSC_6725_thumbnail.jpg', 'alt': '' },
			{ 'src': 'DSC_6751_thumbnail.jpg', 'alt': '' },
			{ 'src': 'DSC_6775_thumbnail.jpg', 'alt': '' },
			{ 'src': 'DSC_6825_thumbnail.jpg', 'alt': '' },
			{ 'src': 'DSC_7007_thumbnail.jpg', 'alt': '' },
			{ 'src': 'DSC_7016_thumbnail.jpg', 'alt': '' },
		];
		return (
			<div className={styles.container}>
				<h3 className={styles.title}>{this.props.title}</h3>
				<div className={styles.photoGrid}>
					{photos.map( ( photo, key ) => {
						return (
							<div>
								<div className={styles.photoContainer}>
									<img src={'images/viewer_images/thumbnails/' + photo.src} id={key} alt={photo.alt} onClick={this.onImgClick}/>
								</div>
							</div>
						);
					} )
					}
				</div>
			</div>
		
		);
	}
}