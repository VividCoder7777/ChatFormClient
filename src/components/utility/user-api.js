import axios from 'axios';
import Login from '../login/login';

class LoginAPI {
	constructor() {
		this.instance = axios.create({
			// TODO: add one for PROD
			baseURL: process.env.REACT_APP_LOGIN_DEV
			//withCredentials: true
		});
	}

	login({ username, password }) {
		console.log(username, password);
		console.log('making request');
		return this.instance.post('/login', {
			username,
			password
		});
	}

	register({ username, password, retypepassword }) {
		return this.instance.post('/register', {
			username,
			password,
			retypepassword
		});
	}
}

export default new LoginAPI();
