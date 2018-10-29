import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuItems extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</React.Fragment>
		);
	}
}

export default MenuItems;
