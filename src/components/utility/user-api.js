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

	Login({ username, password }) {
		return this.instance.get('/', {
			username,
			password
		});
	}

	register({ username, password }) {
		return this.instance.post('/register', {
			username,
			password
		});
	}
}

export default new LoginAPI();
