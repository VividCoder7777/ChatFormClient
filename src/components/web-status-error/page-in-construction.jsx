import React, { Component } from 'react';
import Construction from '../../resources/images/hammer.jpeg';
import './general.scss';
import { Link } from 'react-router-dom';

class PageInConstruction extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="construction-con">
				<h1>{this.props.message ? this.props.message : 'Page Is Not Avaiable Yet'}</h1>
				<img src={Construction} />
				<Link to="/">Return Home</Link>
			</div>
		);
	}
}

export default PageInConstruction;
