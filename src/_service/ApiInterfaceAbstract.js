class ApiInterfaceAbstract {

	/**
	 * Creating options for POST request
	 *
	 * @param body
	 * @returns {*}
	 * @private
	 */
	_createPostOptions(body) {
		if (body instanceof FormData) {
			return {
				method: "POST",
				credentials: "include",
				body,
			};
		} else {
			return {
				method: "POST",
				credentials: "include",
			};
		}
	}

	/**
	 * Creating options for PUT request
	 *
	 * @returns {*}
	 * @private
	 */
	_createPutOptions(data) {
		return {
			method: "PUT",
			credentials: "include",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		};
	}

	/**
	 * Creating options for DELETE request
	 *
	 * @returns {*}
	 * @private
	 */
	_createDeleteOptions() {
		return {
			method: "DELETE",
			credentials: "include",
		};
	}

	/**
	 * Creating options for GET request
	 *
	 * @returns {*}
	 * @private
	 */
	_createGetOptions() {
		return {
			method: "GET",
			credentials: "include",
		};
	}

	/**
	 * Creating body for request
	 *
	 * @param data
	 * @returns {null|FormData}
	 * @private
	 */
	_createBody(data) {
		if (!Object.keys(data).length) {
			throw new Error("Data is empty!");
		}

		if (typeof data !== "object") {
			throw new Error("Wrong data type!");
		}

		if (!data) {
			return null;
		}

		const formData = new FormData();

		for (let key in data) {
			formData.append(key, data[key]);
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
		if (typeof params !== "object") {
			throw new Error("Invalid params type!");
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
	 * Sending PUT request
	 *
	 * @returns {Promise<Response>}
	 * @private
	 * @param url
	 * @param data
	 */
	_sendPut(url, data) {
		const options = this._createPutOptions(data);

		return fetch(url, options);
	}

	/**
	 * Sending DELETE request
	 *
	 * @param url
	 * @returns {Promise<Response>}
	 * @private
	 */
	_sendDelete(url) {
		const options = this._createDeleteOptions();

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

export default ApiInterfaceAbstract;