import axios from 'axios';
import Login from '../login/login';

class LoginAPI {
	constructor() {
		this.instance = axios.create({
			baseURL: process.env.REACT_APP_PROXY_DEV,
			timeout: 1000
		});
	}

	Login({ username, password }) {
		this.instance
			.get('/', {
				username,
				password
			})
			.then((result) => {
				return result;
			})
			.catch((error) => {
				return null;
			});
	}
}

export default new LoginAPI();
