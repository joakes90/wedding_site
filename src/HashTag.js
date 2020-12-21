import React, {Component} from 'react';
import styles from './CSS/wedding.module.css';

export default class HashTag extends Component {
	
	render() {
		
		return (
				<div className={styles.hashTag}>
					<h2 className={styles.title}>#OfficallyOakes</h2>
				</div>
		);
	}
}