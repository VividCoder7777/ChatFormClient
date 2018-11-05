import React, { Component } from 'react';
import MenuItems from './menu-items';

/*  TODO:
    1. takes in an element for a prop
    2. give element an onclick listen to show menu
*/

class SideMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<ul id="side-menu" onClick={this.handleClickMenuItem}>
					<MenuItems isAuthenticated={this.props.isAuthenticated} user={this.props.user} />
				</ul>
			</div>
		);
	}
}

export default SideMenu;
