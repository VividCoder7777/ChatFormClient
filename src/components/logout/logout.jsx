import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		// clear localstorage
		window.localStorage.removeItem(process.env.REACT_APP_JWT_KEY);
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
