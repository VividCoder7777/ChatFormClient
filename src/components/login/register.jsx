import React, { Component } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import UserAPI from '../utility/user-api.js';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = { formErrors: undefined };
	}

	handleSubmit = (event) => {
		event.preventDefault();

		if (event.target.checkValidity()) {
			// change error message class if any
			this.setState({
				username: false,
				password: false,
				retypepassword: false
			});

			let userInfo = {
				username: event.target.elements['username'].value,
				password: event.target.elements['password'].value,
				retypepassword: event.target.elements['retypepassword'].value
			};

			// try to register user
			UserAPI.register(userInfo)
				.then((result) => {
					console.log('dASDASA RESULTS???');
					console.log(result);
					// redirect user if no errors
					if (!result.data.errors) {
						let data = result.data;
						this.props.history.push(data.redirect);
					} else {
						// display errors
						console.log('???');
						this.setState({ formErrors: result.data.errors });
					}
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

	displayValidationErrors = () => {
		if (this.state.formErrors) {
			let errorElements = [];

			for (let error of this.state.formErrors) {
				errorElements.push(<p>{error.msg}</p>);
			}

			return <section id="errorList">{errorElements}</section>;
		}
	};

	render() {
		return (
			<div>
				<div className="form">
					<form onSubmit={this.handleSubmit} noValidate>
						<h3>Create Your Account:</h3>
						{this.displayValidationErrors()}
						<section>
							<label for="username">Username: </label>
							<input name="username" type="text" required placeholder="Email ex: email@example.com" />
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
						<section>
							<label for="retypepassword">Re-Enter Password:</label>
							<input type="password" name="retypepassword" required />
							<label className={(this.state.retypepassword ? 'show' : 'hidden') + ' error-message'}>
								* Please input the same password
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
