import React, { Component } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import UserAPI from '../utility/user-api.js';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = { invalidInformation: false };
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log('HUH?');
		if (event.target.checkValidity()) {
			// change error message class if any
			this.setState({
				username: false,
				password: false
			});

			let userInfo = {
				username: event.target.elements['username'].value,
				password: event.target.elements['password'].value
			};

			console.log(userInfo);

			UserAPI.register(userInfo)
				.then((result) => {
					console.log(result);
				})
				.catch((error) => {});

			// check if username and password matches in DB
		} else {
			// TODO: move this into a method
			let inputError = {};

			for (let input of event.target.elements) {
				if (!input.checkValidity()) {
					inputError[input.name] = true;
				} else {
					inputError[input.name] = false;
				}
			}

			this.setState(inputError);
		}
	};

	render() {
		return (
			<div>
				<div className="form">
					<form onSubmit={this.handleSubmit} noValidate>
						<h3>Create Your Account:</h3>
						<p className={this.state.invalidInformation ? 'visible' : 'hidden'}>
							Username is already taken please try again.
						</p>
						<section>
							<label for="username">Username: </label>
							<input name="username" type="text" required />
							<label className={(this.state.username ? 'show' : 'hidden') + ' error-message'}>
								* Username is required
							</label>
						</section>
						<section>
							<label for="password">Password: </label>
							<input name="password" type="password" required />
							<label className={(this.state.password ? 'show' : 'hidden') + ' error-message'}>
								* Password is required
							</label>
						</section>
						<div className="flex-right">
							<button>Create</button>
						</div>
						<p className="center-text">
							Already have an account?{' '}
							<Link to="/login">
								<span className="link">Login</span>
							</Link>
						</p>
					</form>
				</div>
			</div>
		);
	}
}

export default Register;
