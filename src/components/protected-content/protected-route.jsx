import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserAPI from '../utility/user-api';
import JWTHelper from '../utility/jwt';
import Shop from './shop';
import Profile from './profile';

class ProtectedRoute extends Component {
	componentDidMount() {
		this.props.authCallback();
	}

	authCallback = () => {};

	displayAuthRoutes = () => {
		const route = this.props.match.url;

		return (
			<div>
				<Route path={route + '/shop'} component={Shop} />
				<Route path={route + '/profile'} component={Profile} />
			</div>
		);
	};

	displayContent = () => {
		if (this.props.checkedAuthStatus) {
			if (this.props.isAuthenticated) {
				// return routes
				return this.displayAuthRoutes();
			} else {
				return (
					<Redirect
						to={{
							pathname: '/login',
							state: { message: 'You must login first to access this page' }
						}}
					/>
				);
			}
		} else {
			// show loading sign maybe?
		}
	};

	render() {
		return <React.Fragment>{this.displayContent()}</React.Fragment>;
	}
}

export default ProtectedRoute;
