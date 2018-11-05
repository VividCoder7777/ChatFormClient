import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import JWTHelper from '../utility/jwt';

class Logout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		console.log('LOGGING OUT');
		// clear localstorage
		JWTHelper.clearToken();
		this.props.logoutCallback();
		// redirect
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				{' '}
				<h1>Logging Out</h1>
			</div>
		);
	}
}

export default Logout;
