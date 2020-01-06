class ApiService {

	/**
	 * Constructor
	 */
	constructor() {
		this.API_URL = process.env.API_URL || 'https://portal.veloplaneta.com.ua/hr/'
	}

	/**
	 * Creating options for POST request
	 *
	 * @param body
	 * @returns {*}
	 * @private
	 */
	_createPostOptions(body) {
		if(body instanceof FormData) {
			return {
				method: 'POST',
				credentials: 'include',
				body
			}
		} else {
			throw new Error('Body not specified or invalid type!')
		}
	}

	/**
	 * Creating options for PATCH request
	 *
	 * @param body
	 * @returns {*}
	 * @private
	 */
	_createPatchOptions(body) {
		if(body instanceof FormData) {
			return {
				method: 'PATCH',
				credentials: 'include',
				body
			}
		} else {
			throw new Error('Body not specified or invalid type!')
		}
	}

	/**
	 * Creating options for GET request
	 *
	 * @returns {*}
	 * @private
	 */
	_createGetOptions() {
		return {
			method: 'GET',
			credentials: 'include',
		}
	}

	/**
	 * Creating body for request
	 *
	 * @param data
	 * @returns {null|FormData}
	 * @private
	 */
	_createBody(data) {
		if(!Object.keys(data).length) {
			throw new Error('Data is empty!')
		}

		if(typeof data !== 'object') {
			throw new Error('Wrong data type!')
		}

		if(!data) {
			return null
		}

		const formData = new FormData();

		for (let key in data) {
			formData.append(key, data[key])
		}

		return formData;
	}

	/**
	 * Creating url with query params for GET request
	 *
	 * @param baseUrl
	 * @param params
	 * @private
	 */
	_createUrlWIthQueryParams(baseUrl, params) {
		if(typeof params !== 'object') {
			throw new Error('Invalid params type!');
		}

		const url = new URL(baseUrl);

		Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

		return url.href;
	}

	/**
	 * Sending POST request
	 *
	 * @param url
	 * @param data
	 * @returns {Promise<Response>}
	 * @private
	 */
	_sendPost(url, data) {
		const body = this._createBody(data);

		const options = this._createPostOptions(body);

		return fetch(url, options);
	}

	/**
	 * Sending PATCH request
	 *
	 * @param url
	 * @param data
	 * @returns {Promise<Response>}
	 * @private
	 */
	_sendPatch(url, data) {
		const body = this._createBody(data);

		const options = this._createPostOptions(body);

		return fetch(url, options);
	}

	/**
	 * Sending GET request
	 *
	 * @param baseUrl
	 * @param params
	 * @returns {Promise<Response>}
	 * @private
	 */
	_sendGet(baseUrl, params = {}) {
		const url = this._createUrlWIthQueryParams(baseUrl, params);

		const options = this._createGetOptions();

		return fetch(url, options);
	}
}

export default ApiService;