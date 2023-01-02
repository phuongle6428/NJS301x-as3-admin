// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#requestconfig` for the full list of configs
const axiosClient = axios.create({
	baseURL: 'https://njs-301x-as3-nodejs-tutwcqxix-phuongle6428.vercel.app/',
	headers: {
		'content-type': 'application/json',
	},
	paramsSerializer:{ serialize: (params) => queryString.stringify(params)},
});
axiosClient.interceptors.request.use(async (config) => {
	// Handle token here ...
	const accessToken = localStorage.getItem('as3_user_token')
	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}
	return config;
});
axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}
		return response;
	},
	(error) => {
		// Handle errors
		throw error;
	}
);
export default axiosClient;
