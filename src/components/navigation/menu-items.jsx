import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JWTHelper from '../utility/jwt';

class MenuItems extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	isUserLoggedIn = () => {
		let user = this.getUser();

		if (this.props.isAuthenticated) {
			return (
				<div id="user-menu">
					<Link to="/profile">{user ? user.username : 'Logout'}</Link>
					<div className="submenu">
						<ul>
							<li>
								<Link to="/protected/profile">Profile</Link>
							</li>
							<li>
								<Link to="/logout">Logout</Link>
							</li>
						</ul>
					</div>
				</div>
			);
		} else {
			return <Link to="/login">Login</Link>;
		}
	};

	getUser = () => {
		return this.props.user ? this.props.user : undefined;
	};

	render() {
		return (
			<React.Fragment>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/protected/shop">Shop</Link>
				</li>
				<ul id="user-actions">
					<li>{this.isUserLoggedIn()}</li>
				</ul>
			</React.Fragment>
		);
	}
}

export default MenuItems;
