import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import banner from '../../resources/images/busbanner.jpeg';
import './home.scss';
import Vest from '../../resources/images/clothes/vest.png';
import DressShirt from '../../resources/images/clothes/dress-shirt.png';
import Collar from '../../resources/images/clothes/collar.png';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	displayUserMessage = () => {
		const isMember = this.props.isAuthenticated;

		if (isMember) {
			return <Link to="/protected/shop">Start Shopping Now</Link>;
		} else {
			return <Link to="/register">Become A Member Today</Link>;
		}
	};

	render() {
		return (
			<div id="container">
				<div id="company">
					<p>VON LEGACY</p>
				</div>
				<div id="sales-pitch">
					<p>
						Free Shipping On All Orders Over <span className="underline">$100</span>
					</p>
				</div>
				<div id="banner">
					<div id="banner-text">
						<p>Premium Wear</p>
					</div>
					<img src={banner} />
				</div>
				<div id="wardrobe">
					<h1>The Gentlemen Collection</h1>
					<div className="clothes-item">
						<img src={Vest} />
						<p>Keep Up With The Lastest Trends.</p>
					</div>
					<hr />
					<div className="clothes-item">
						<img src={DressShirt} />
						<p>Tailored to Perfection, For All Your Needs.</p>
					</div>
					<hr />
					<div className="clothes-item">
						<img src={Collar} />
						<p>A Style That Keeps You Feeling You</p>
					</div>
					<hr />
					<div id="member">
						<h2>Access The Exclusive Colleciton</h2>
						{this.displayUserMessage()}
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
