import React, { Component } from 'react';
import './navigation.css';
import { Route, Link } from 'react-router-dom';

class navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="black">
				<ul id="navbar">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default navigation;
