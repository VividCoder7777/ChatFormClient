import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/home/home';
import NavBar from './components/navigation/navigation';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<Route exact path="/login" component={Login} />
				<Route exact path="/" component={Home} />
			</div>
		);
	}
}

export default App;
