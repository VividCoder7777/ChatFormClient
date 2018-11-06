import React, { Component } from 'react';
import './App.scss';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/home/home';
import NavBar from './components/navigation/navigation';
import NavBarMobile from './components/navigation/navigation-mobile';
import Footer from './components/footer/footer';
import PageNotFound from './components/web-status-error/page-not-found';
import Register from './components/login/register';
import Logout from './components/logout/logout';
import UserAPI from './components/utility/user-api';
import ProtectedRoute from './components/protected-content/protected-route';
import JWTHelper from './components/utility/jwt';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMobile: false,
			isAuthenticated: false,
			checkedAuthStatus: false,
			user: {}
		};
	}

	checkIfUserIsAuthenticated = () => {
		if (JWTHelper.hasToken()) {
			UserAPI.isAuthenticated(JWTHelper.getAuthToken()).then((result) => {
				console.log('results are ', result);
				if (result.data.user) {
					this.setState({
						checkedAuthStatus: true,
						isAuthenticated: true,
						user: result.data.user
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
				checkedAuthStatus: true,
				isAuthenticated: false
			});
		}
	};

	authCallback = () => {
		this.checkIfUserIsAuthenticated();
	};

	logoutCallback = () => {
		this.setState({
			isAuthenticated: false
		});
	};

	componentDidMount() {
		console.log(process.env);
		let viewportWidth = document.documentElement.clientWidth;

		// TODO: make this mobile value an env variable?
		let mobileWidth = 457;

		if (viewportWidth <= mobileWidth) {
			this.setState({
				isMobile: true
			});
		}

		// Add window listener;
		window.addEventListener('resize', () => {
			let viewportWidth = document.documentElement.clientWidth;

			if (viewportWidth <= mobileWidth) {
				this.setState({
					isMobile: true
				});
			} else {
				this.setState({
					isMobile: false
				});
			}
		});

		this.checkIfUserIsAuthenticated();
	}

	// get data
	loginCallback = (data) => {
		let token = data.token;
		let user = data.user;
		this.setState({
			isAuthenticated: token ? true : false,
			user
		});
	};

	render() {
		return (
			<div className="App">
				<Route
					render={(props) => {
						if (this.state.isMobile) {
							return (
								<NavBarMobile
									{...props}
									isAuthenticated={this.state.isAuthenticated}
									user={this.state.user}
								/>
							);
						} else {
							return (
								<NavBar
									{...props}
									isAuthenticated={this.state.isAuthenticated}
									user={this.state.user}
								/>
							);
						}
					}}
				/>
				<div id="content">
					<Switch>
						<Route
							exact
							path="/login"
							render={(props) => {
								return <Login {...props} loginCallback={this.loginCallback} />;
							}}
						/>
						<Route
							exact
							path="/logout"
							render={(props) => {
								return <Logout {...props} logoutCallback={this.logoutCallback} />;
							}}
						/>
						<Route path="/register" component={Register} />
						<Route exact path="/" component={Home} />
						<Route
							path="/protected"
							render={(props) => {
								return (
									<ProtectedRoute
										{...props}
										authCallback={this.authCallback}
										isAuthenticated={this.state.isAuthenticated}
										checkedAuthStatus={this.state.checkedAuthStatus}
									/>
								);
							}}
						/>
						<Route component={PageNotFound} />
					</Switch>
				</div>
				<div id="footer">
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
