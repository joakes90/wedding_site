import React, {Component} from 'react';
import styles from './CSS/wedding.module.css';

export default class HeroBanner extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.heroBanner} id="saveDate">
				<img src={this.props.image} alt="Hero"/>
				<h2>
					{this.props.event}
					<br/>
					{this.props.date}
				</h2>
			</div>
		);
	}
}