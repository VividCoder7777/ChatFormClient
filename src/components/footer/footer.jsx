import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="footcon">
				<ul>
					<li>About</li>
					<li>Contact</li>
					<li>Location</li>
					<li>Careers</li>
				</ul>
			</div>
		);
	}
}

export default Footer;
