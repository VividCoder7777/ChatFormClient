import axios from 'axios';

class LoginAPI {
	constructor() {
		this.instance = axios.create({
			// TODO: add one for PROD
			baseURL: process.env.REACT_APP_LOGIN_DEV
			//withCredentials: true
		});
	}

	login({ username, password }) {
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

	isAuthenticated(jwt) {
		return this.instance.post(
			'/authentication-status',
			{},
			{
				headers: {
					Authorization: 'Bearer ' + jwt
				}
			}
		);
	}
}

export default new LoginAPI();
