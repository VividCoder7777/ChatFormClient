import React, { Component } from 'react';
import './navigation.scss';
import { Route, Link } from 'react-router-dom';
import MenuItems from './menu-items';

class navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="black">
				<ul id="navbar">
					<MenuItems />
				</ul>
			</div>
		);
	}
}

export default navigation;
