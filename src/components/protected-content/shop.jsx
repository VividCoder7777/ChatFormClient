import React, { Component } from 'react';
import Construction from '../web-status-error/page-in-construction';
class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Construction message="Shop Page Is Still In Construction. Sorry For The Inconvenience" />
			</div>
		);
	}
}

export default Shop;
