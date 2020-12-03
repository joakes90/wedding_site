import React, {Component} from 'react';
import styles from './CSS/wedding.module.css';

export default class PlaceHolder extends Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className={styles.container}>
				<h3 className={styles.title}>{this.props.title}</h3>
				<div className={styles.placeHolder}>
					<p className={styles.placeHolderMessage}>{this.props.message}</p>
				</div>
			</div>
		
		);
	}
}