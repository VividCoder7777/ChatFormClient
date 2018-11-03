class JWT {
	hasToken = () => {
		let authToken = window.localStorage.getItem(process.env.REACT_APP_JWT_KEY);

		return authToken ? true : false;
	};

	getAuthToken() {
		let authToken = window.localStorage.getItem(process.env.REACT_APP_JWT_KEY);

		return authToken;
	}

	clearToken() {
		window.localStorage.removeItem(process.env.REACT_APP_JWT_KEY);
	}
}

export default new JWT();
