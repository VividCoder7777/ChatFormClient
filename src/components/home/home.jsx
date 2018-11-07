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
				<div id="company">
					<p>VON LEGACY</p>
				</div>
				<div id="sales-pitch">
					<p>
						Free Shipping On Orders Over <span className="underline">$100</span>
					</p>
				</div>
				<div id="banner">
					<div id="banner-text">
						<p>Premium Wear</p>
					</div>
					<img src={banner} />
				</div>
				<div>
					<Link to="/login">Click Here To Login</Link>
				</div>
			</div>
		);
	}
}

export default Home;
