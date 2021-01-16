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
        url:"images/viewer_images/IMG_1591.jpeg",
        title:"Mattie and Justin 1"
    },
    {
        url:"images/viewer_images/IMG_1534.jpeg",
        title:"Mattie and Justin 2"
    },
    {
        url:"images/viewer_images/IMG_1505.jpeg",
        title:"Mattie and Justin 3"
    },
    {
        url:"images/viewer_images/IMG_1485.jpeg",
        title:"Mattie and Justin 4"
    },
    {
        url:"images/viewer_images/IMG_1479.jpeg",
        title:"Mattie and Justin 5"
    },
    {
        url:"images/viewer_images/IMG_1456.jpeg",
        title:"Mattie and Justin 6"
    },
    {
        url:"images/viewer_images/IMG_1326.jpeg",
        title:"Mattie and Justin 7"
    },
    {
        url:"images/viewer_images/IMG_1311.jpeg",
        title:"Mattie and Justin 8"
    },
    {
        url:"images/viewer_images/IMG_1293.jpeg",
        title:"Mattie and Justin 9"
    },
	{
        url:"images/viewer_images/IMG_1297.jpeg",
        title:"Mattie and Justin 10"
    },
    {
        url:"images/viewer_images/IMG_1301.jpeg",
        title:"Mattie and Justin 11"
    },
	{
        url:"images/viewer_images/IMG_1305.jpeg",
        title:"Mattie and Justin 12"
    },
	{
        url:"images/viewer_images/IMG_4119.jpeg",
        title:"Mattie and Justin 13"
    },
        {
        url:"images/viewer_images/IMG_4311.jpeg",
        title:"Mattie and Justin 14"
    },
]
		return (
			<Lightbox images={images} allowRotate={false} showTitle={false} startIndex={this.props.startIndex} onClose={this.props.dismiss}/>
		);
	}
}