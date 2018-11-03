import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserAPI from '../utility/user-api';
import JWTHelper from '../utility/jwt';

class ProtectedRoute extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: false,
			checkedAuthStatus: false
		};
	}

	componentDidMount() {
		// call check aith
		if (JWTHelper.hasToken()) {
			UserAPI.isAuthenticated(JWTHelper.getAuthToken()).then((result) => {
				console.log('results are ', result);
				if (result.data.user) {
					this.setState({
						checkedAuthStatus: true,
						isAuthenticated: true
					});
				} else {
					this.setState({
						checkedAuthStatus: true,
						isAuthenticated: false
					});
					JWTHelper.clearToken();
				}
			});
		} else {
			this.setState({
				checkedAuthStatus: true
			});
		}
	}

	authCallback = () => {};

	displayContent = () => {
		if (this.state.checkedAuthStatus) {
			if (this.state.isAuthenticated) {
				// return routes
				return <p>Wow you authenticated</p>;
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
