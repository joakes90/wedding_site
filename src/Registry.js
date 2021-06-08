import React, {Component} from "react";
import styles from './CSS/wedding.module.css';

export default class Registry extends Component {

	render() {
		return(
			<div className={styles.container}>
				<h3 className={styles.title}>Registry</h3>
				<div className={styles.linklist}>
					<a href="https://www.honeyfund.com/wedding/hudson-oakes-10-17-2021">
						<img src="images/honeyfund.png"/>
					</a>
					<a href="https://www.target.com/gift-registry/giftgiver?registryId=c80b18f2cc3c4abaa6de96c83d1e0ec3&lnk=registry_custom_url">
						<img src="images/target.png"/>
					</a>
				</div>
			</div>
		);
	}
}