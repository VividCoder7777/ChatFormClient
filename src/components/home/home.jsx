import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import banner from '../../resources/images/busbanner.jpeg';
import './home.scss';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div id="container">
				<div id="banner">
					<div id="banner-text">
						<h1 id="company-name">Von Legacy</h1>
						<p>Premium Wear</p>
					</div>
					<img src={banner} />
				</div>
				<Link to="/login">Click Here To Login</Link>
			</div>
		);
	}
}

export default Home;
