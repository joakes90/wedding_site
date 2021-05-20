import React, {Component} from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

export default class PhotoViewer extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let images = [
    {
        url:"images/viewer_images/IMG_1505.jpeg",
        title:"Mattie and Justin 1"
    },
    {
        url:"images/viewer_images/IMG_1485.jpeg",
        title:"Mattie and Justin 2"
    },
    {
        url:"images/viewer_images/IMG_1479.jpeg",
        title:"Mattie and Justin 3"
    },
    {
        url:"images/viewer_images/IMG_1293.jpeg",
        title:"Mattie and Justin 4"
    },
	{
        url:"images/viewer_images/IMG_1297.jpeg",
        title:"Mattie and Justin 5"
    },
    {
        url:"images/viewer_images/IMG_1301.jpeg",
        title:"Mattie and Justin 6"
    },
	{
        url:"images/viewer_images/IMG_1305.jpeg",
        title:"Mattie and Justin 7"
    },
    {
        url:"images/viewer_images/IMG_4311.jpeg",
        title:"Mattie and Justin 8"
    },
    {
        url:"images/viewer_images/IMG_0076.jpeg",
        title:"Mattie and Justin 9"
    },
    {
        url:"images/viewer_images/IMG_0164.jpeg",
        title:"Mattie and Justin 10"
    },
    {
        url:"images/viewer_images/IMG_0224.jpeg",
        title:"Mattie and Justin 11"
    },
    {
        url:"images/viewer_images/IMG_1309.jpeg",
        title:"Mattie and Justin 12"
    },
    {
        url:"images/viewer_images/IMG_0684.jpeg",
        title:"Mattie and Justin 13"
    },
	{
        url:"images/viewer_images/IMG_5989.jpeg",
        title:"Mattie and Justin 14"
    },
    {
        url:"images/viewer_images/DSC_1-1.jpg",
        title:"Mattie and Justin 15"
    },
    {
        url:"images/viewer_images/DSC_6.jpg",
        title:"Mattie and Justin 16"
    },
    {
        url:"images/viewer_images/DSC_6663.jpg",
        title:"Mattie and Justin 17"
    },
    {
        url:"images/viewer_images/DSC_6686.jpg",
        title:"Mattie and Justin 18"
    },
    {
        url:"images/viewer_images/DSC_6725.jpg",
        title:"Mattie and Justin 19"
    },
    {
        url:"images/viewer_images/DSC_6751.jpg",
        title:"Mattie and Justin 20"
    },
    {
        url:"images/viewer_images/DSC_6775.jpg",
        title:"Mattie and Justin 21"
    },
    {
        url:"images/viewer_images/DSC_6825.jpg",
        title:"Mattie and Justin 22"
    },
	{
        url:"images/viewer_images/DSC_7007.jpg",
        title:"Mattie and Justin 23"
    },
    {
        url:"images/viewer_images/DSC_7016.jpg",
        title:"Mattie and Justin 24"
    },
    {
        url:"images/viewer_images/DSC_7029.jpg",
        title:"Mattie and Justin 25"
    },
]
		return (
			<Lightbox images={images} allowRotate={false} showTitle={false} startIndex={this.props.startIndex} onClose={this.props.dismiss}/>
		);
	}
}