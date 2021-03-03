import React, {Component} from "react";
import styles from './CSS/wedding.module.css';
import rsvp_styles from './CSS/rsvp.module.css';

export default class PartyMember extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className={styles.partyContainer}>
				<img src={this.props.image}/>
				<p>{this.props.name}</p>
				<p>{this.props.title}</p>
			</div>
		);
	}
}