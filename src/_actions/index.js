import {
	FETCH_ERROR,
	FETCH_LOADING,
	FETCH_SUCCESS,
	RESET_REDUCER,
	SET_CHANGE_POSITION_USER,
	SET_NEW_USER_POSITION,
} from "../_store/types";
import { CHANGE_POSITION_ENTITY } from "../_store/entities";

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

/**
 *
 * @param entity
 * @returns {{type: string, entity: *}}
 */
export const resetReducer = entity => {
	return {
		type: RESET_REDUCER,
		entity,
	};
};

/**
 *
 * @param position
 * @returns {{payload: *, type: *}}
 */
export const setNewPosition = position => {
	return {
		type: SET_NEW_USER_POSITION,
		payload: position,
	};
};
