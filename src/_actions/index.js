import { FETCH_ERROR, FETCH_LOADING, FETCH_SUCCESS } from "../_store/types";

/**
 *
 * @param name
 * @returns {{name: *, type: *}}
 */

export const fetchDataLoading = name => {
	return {
		type: FETCH_LOADING,
		name,
	};
};

/**
 *
 * @param name
 * @param data
 * @returns {{data: *, name: *, type: *}}
 */
export const fetchDataSuccess = (name, data) => {
	return {
		type: FETCH_SUCCESS,
		name,
		data,
	};
};

/**
 *
 * @param name
 * @returns {{name: *, type: *}}
 */
export const fetchDataError = name => {
	return {
		type: FETCH_ERROR,
		name,
	};
};

