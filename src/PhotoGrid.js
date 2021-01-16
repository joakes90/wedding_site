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
		let viewer = <PhotoViewer startIndex={imageIndex === 0 ? null : imageIndex} dismiss={this.dismissViewer} id="viewer"/>
		ReactDOM.render(viewer, document.getElementById('viewer_container'));
	}
	
	
	render() {
		return (
			<div className={styles.container}>
				<h3 className={styles.title}>{this.props.title}</h3>
				<div className={styles.photoGrid}>
					<div>
						<div className={styles.photoContainer}>
						<img src="images/viewer_images/thumbnails/IMG_1591_thumbnail.jpeg" onClick={this.onImgClick} id={0} alt="couple 1"/>
						</div>
						<p className={styles.photoCaption}>Hello this is a caption</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1534_thumbnail.jpeg" onClick={this.onImgClick} id={1} alt="couple 2"/>
						</div>
						<p className={styles.photoCaption}>Hello this is a caption</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1505_thumbnail.jpeg" onClick={this.onImgClick} id={2} alt="couple 3"/>
						</div>
						<p className={styles.photoCaption}>Hello this is a caption</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1485_thumbnail.jpeg" onClick={this.onImgClick} id={3} alt="couple 4"/>
						</div>
						<p className={styles.photoCaption}>Hello this is a caption</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1479_thumbnail.jpeg" onClick={this.onImgClick} id={4} alt="couple 5"/>
						</div>
						<p className={styles.photoCaption}>Hello this is a caption</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1456_thumbnail.jpeg" onClick={this.onImgClick} id={5} alt="couple 6"/>
						</div>
						<p className={styles.photoCaption}>Hello this is a caption</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1326_thumbnail.jpeg" onClick={this.onImgClick} id={6} alt="couple 7"/>
						</div>
						<p className={styles.photoCaption}>Hello this is a caption</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1311_thumbnail.jpeg" onClick={this.onImgClick} id={7} alt="couple 8"/>
						</div>
						<p className={styles.photoCaption}>Hello this is a caption</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1293_thumbnail.jpeg" onClick={this.onImgClick} id={8} alt="couple 9"/>
						</div>
						<p className={styles.photoCaption}>Hello this is a caption</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1297_thumbnail.jpeg" onClick={this.onImgClick} id={9} alt="couple 10"/>
						</div>
						<p className={styles.photoCaption}>Hello this is a caption</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1301_thumbnail.jpeg" onClick={this.onImgClick} id={10} alt="couple 11"/>
						</div>
						<p className={styles.photoCaption}>Hello this is a caption</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1305_thumbnail.jpeg" onClick={this.onImgClick} id={11} alt="couple 12"/>
						</div>
						<p className={styles.photoCaption}>Hello this is a caption</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_4119_thumbnail.jpeg" onClick={this.onImgClick} id={12} alt="couple 13"/>
						</div>
						<p className={styles.photoCaption}>Hello this is a caption</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_4311_thumbnail.jpeg" onClick={this.onImgClick} id={13} alt="couple 14"/>
						</div>
						<p className={styles.photoCaption}>Hello this is a caption</p>
					</div>
				</div>
			</div>
		
		);
	}
}