import axios from 'axios';

class LoginAPI {
	constructor() {
		let baseURL = '';

		switch (process.env.NODE_ENV) {
			case 'development':
				baseURL = process.env.REACT_APP_LOGIN_DEV;
				break;
			case 'production':
				baseURL = process.env.REACT_APP_LOGIN_PROD;
				break;
			default:
				baseURL = process.env.REACT_APP_LOGIN_DEV;
		}
		this.instance = axios.create({
			baseURL: baseURL
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
