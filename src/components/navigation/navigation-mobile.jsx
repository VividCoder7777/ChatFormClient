import React, { Component } from 'react';
import MenuIcon from '../../resources/images/hamburger-menu.png';
import SideMenu from './navigation-menu-side';

class NavigationMobile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showSideMenu: false
		};
	}

	handleClickOnMenu = (event) => {
		this.setState({
			showSideMenu: true
		});
	};

	handleClickMenuItem = (event) => {
		if (event.target.tagName != 'A') return;

		this.setState({
			showSideMenu: false
		});
	};

	render() {
		return (
			<div className="black">
				<div
					id="side"
					className={this.state.showSideMenu ? 'visible' : 'hidden'}
					onClick={this.handleClickMenuItem}
				>
					<SideMenu isAuthenticated={this.props.isAuthenticated} user={this.props.user} />
				</div>
				<ul id="navbar">
					<li>
						<div>
							<img src={MenuIcon} id="menu" onClick={this.handleClickOnMenu} alt="menu" />
						</div>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavigationMobile;
