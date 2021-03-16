import api from './config'

export default {
	login(params) {
		return api.post("/api/auth/login", params);
	},

	logout() {
		let card = {
			userName: 'Nastya',
			userAge: 20,
			testResults: {
				test1: 20,
				test2: 30,
				test3: 40
			}
		};
		return api.get("/api/auth/logout");
	},

	signup(params) {
		return api.post("/api/auth/register", params)
	},

	isLoggedIn() {
		return api.get("/api/auth/loggedIn")
	}
}
