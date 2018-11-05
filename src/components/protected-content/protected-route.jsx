import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserAPI from '../utility/user-api';
import JWTHelper from '../utility/jwt';

class ProtectedRoute extends Component {
	componentDidMount() {
		console.log('componentdidmount CALLBACK TIME');
		this.props.authCallback();
	}

	authCallback = () => {};

	displayContent = () => {
		if (this.props.checkedAuthStatus) {
			if (this.props.isAuthenticated) {
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
