import React, {Component} from 'react';
import styles from './CSS/wedding.module.css';

export default class Footer extends Component {
	
	render() {
		
		return (
			<div className={styles.footer}>
				<p>Copyright 2021 Justin Oakes. All rights reserved</p>
			</div>
		);
	}
}