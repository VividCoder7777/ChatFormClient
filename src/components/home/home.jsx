import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<h1>Home</h1>
				<Link to="/login">Click Here To Login</Link>
			</div>
		);
	}
}

export default Home;
