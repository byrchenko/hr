import { FETCH_ERROR, FETCH_LOADING, FETCH_SUCCESS } from "../_store/types";

/**
 *
 * @returns {{name: *, type: *}}
 * @param entity
 */

export const fetchDataLoading = entity => {
	return {
		type: FETCH_LOADING,
		entity,
	};
};

/**
 *
 * @param entity
 * @param data
 * @returns {{data: *, name: *, type: *}}
 */
export const fetchDataSuccess = (entity, data) => {
	return {
		type: FETCH_SUCCESS,
		entity,
		data,
	};
};

/**
 *
 * @returns {{name: *, type: *}}
 * @param entity
 */
export const fetchDataError = entity => {
	return {
		type: FETCH_ERROR,
		entity,
	};
};

