import React, { Component } from 'react';
import './login.css';
import '../utility/login-api';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { invalidLogin: false };
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(event.target.elements['password'].value);
		if (event.target.checkValidity()) {
		} else {
			// did not fill in username or password
			for (let i of event.target.elements) {
				if (!i.checkValidity()) {
					console.log(i);
					console.log('NOT VALID');
				} else {
					console.log(i);
					console.log('IT IS VALID');
				}
			}
		}
	};

	render() {
		return (
			<div className="loginContainer">
				<div className="form">
					<form onSubmit={this.handleSubmit} noValidate>
						<h3>Sign In To Website:</h3>
						<p className={this.state.invalidLogin ? 'visible' : 'hidden'}>
							Username or password is incorrect. Please try again.
						</p>
						<label for="username">Username: </label>
						<input name="username" type="text" required />
						<label for="password">Password: </label>
						<input name="password" type="password" required />
						<button>Login</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
