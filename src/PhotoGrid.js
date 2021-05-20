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
		return (
			<div className={styles.container}>
				<h3 className={styles.title}>{this.props.title}</h3>
				<div className={styles.photoGrid}>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1505_thumbnail.jpeg" onClick={this.onImgClick} id={0} alt="Photos from our first engagement shoot!"/>
						</div>
						<p className={styles.photoCaption}>Photos from our first engagement shoot!</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1485_thumbnail.jpeg" onClick={this.onImgClick} id={1} alt="Photos from our first engagement shoot!"/>
						</div>
						<p className={styles.photoCaption}>Photos from our first engagement shoot!</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1479_thumbnail.jpeg" onClick={this.onImgClick} id={2} alt="Photos from our first engagement shoot!"/>
						</div>
						<p className={styles.photoCaption}>Photos from our first engagement shoot!</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1293_thumbnail.jpeg" onClick={this.onImgClick} id={3} alt="This was the night we got engaged. Justin took Mattie to the Yukon lights where he proposed."/>
						</div>
						<p className={styles.photoCaption}>This was the night we got engaged. Justin took Mattie to the Yukon lights where he proposed.</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1297_thumbnail.jpeg" onClick={this.onImgClick} id={4} alt="This was the night we got engaged. Justin took Mattie to the Yukon lights where he proposed."/>
						</div>
						<p className={styles.photoCaption}>This was the night we got engaged. Justin took Mattie to the Yukon lights where he proposed.</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1301_thumbnail.jpeg" onClick={this.onImgClick} id={5} alt="This was the night we got engaged. Justin took Mattie to the Yukon lights where he proposed."/>
						</div>
						<p className={styles.photoCaption}>This was the night we got engaged. Justin took Mattie to the Yukon lights where he proposed.</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1305_thumbnail.jpeg" onClick={this.onImgClick} id={6} alt="This was the night we got engaged. Justin took Mattie to the Yukon lights where he proposed."/>
						</div>
						<p className={styles.photoCaption}>This was the night we got engaged. Justin took Mattie to the Yukon lights where he proposed.</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_4311_thumbnail.jpeg" onClick={this.onImgClick} id={7} alt="This was when Mattie almost stole a baby Wallaby."/>
						</div>
						<p className={styles.photoCaption}>This was when Mattie almost stole a baby Wallaby.</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_0076_thumbnail.jpeg" onClick={this.onImgClick} id={8} alt="Photos from our first engagement shoot!"/>
						</div>
						<p className={styles.photoCaption}>Photos from our first engagement shoot!</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_0164_thumbnail.jpeg" onClick={this.onImgClick} id={9} alt="Photos from our first engagement shoot!"/>
						</div>
						<p className={styles.photoCaption}>Photos from our first engagement shoot!</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_0224_thumbnail.jpeg" onClick={this.onImgClick} id={10} alt="Photos from our first engagement shoot!"/>
						</div>
						<p className={styles.photoCaption}>Photos from our first engagement shoot!</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_1309_thumbnail.jpeg" onClick={this.onImgClick} id={11} alt="This was right after we got engaged."/>
						</div>
						<p className={styles.photoCaption}>This was right after we got engaged.</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_0684_thumbnail.jpeg" onClick={this.onImgClick} id={12} alt="Us at our first OU football game together."/>
						</div>
						<p className={styles.photoCaption}>Us at our first OU football game together.</p>
					</div>
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/IMG_5989_thumbnail.jpeg" onClick={this.onImgClick} id={13} alt="A picture of Mattie’s engagement ring."/>
						</div>
						<p className={styles.photoCaption}>A picture of Mattie’s engagement ring.</p>
					</div>
					
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/DSC_1-1_thumbnail.jpg" onClick={this.onImgClick} id={14} alt=" "/>
						</div>
						<p className={styles.photoCaption}></p>
					</div>
					
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/DSC_6_thumbnail.jpg" onClick={this.onImgClick} id={15} alt=" "/>
						</div>
						<p className={styles.photoCaption}></p>
					</div>
					
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/DSC_6663_thumbnail.jpg" onClick={this.onImgClick} id={16} alt=" "/>
						</div>
						<p className={styles.photoCaption}></p>
					</div>
					
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/DSC_6686_thumbnail.jpg" onClick={this.onImgClick} id={17} alt=" "/>
						</div>
						<p className={styles.photoCaption}></p>
					</div>
					
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/DSC_6725_thumbnail.jpg" onClick={this.onImgClick} id={18} alt=" "/>
						</div>
						<p className={styles.photoCaption}></p>
					</div>
					
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/DSC_6751_thumbnail.jpg" onClick={this.onImgClick} id={19} alt=" "/>
						</div>
						<p className={styles.photoCaption}></p>
					</div>
					
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/DSC_6775_thumbnail.jpg" onClick={this.onImgClick} id={20} alt=" "/>
						</div>
						<p className={styles.photoCaption}></p>
					</div>
					
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/DSC_6825_thumbnail.jpg" onClick={this.onImgClick} id={21} alt=" "/>
						</div>
						<p className={styles.photoCaption}></p>
					</div>
					
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/DSC_7007_thumbnail.jpg" onClick={this.onImgClick} id={22} alt=" "/>
						</div>
						<p className={styles.photoCaption}></p>
					</div>
					
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/DSC_7016_thumbnail.jpg" onClick={this.onImgClick} id={23} alt=" "/>
						</div>
						<p className={styles.photoCaption}></p>
					</div>
					
					<div>
						<div className={styles.photoContainer}>
							<img src="images/viewer_images/thumbnails/DSC_7029_thumbnail.jpg" onClick={this.onImgClick} id={24} alt=" "/>
						</div>
						<p className={styles.photoCaption}></p>
					</div>
					
					
				</div>
			</div>
		
		);
	}
}