import React, { Component } from 'react';
import Construction from '../web-status-error/page-in-construction';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<Construction message="Profile Page Is Still In Construction. Sorry For The Inconvenience" />
			</div>
		);
	}
}

export default Profile;
