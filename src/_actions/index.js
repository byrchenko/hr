import {
	CLOSE_POPUP,
	FETCH_ERROR,
	FETCH_LOADING,
	FETCH_SUCCESS,
	OPEN_POPUP,
	RESET_REDUCER,
	SET_CHANGE_POSITION_USER,
	SET_NEW_POSITION_POPUP,
	SET_NEW_USER_POSITION,
	SET_POPUP_COMPLETE,
	SET_POPUP_LOADING,
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
		type: SET_NEW_POSITION_POPUP,
		payload: position,
	};
};

/**
 *
 * @param popup
 * @param data
 * @returns {{payload: *, type: string}}
 */
export const openPopup = (popup, data) => {
	return {
		type: OPEN_POPUP,
		payload: {
			type: popup,
			data,
		},
	};
};

/**
 *
 * @param popup
 * @returns {{payload: *, type: string}}
 */
export const closePopup = popup => {
	return {
		type: CLOSE_POPUP,
		payload: popup,
	};
};

/**
 *
 * @returns {{type: string}}
 */
export const setPopupLoading = () => {
	return {
		type: SET_POPUP_LOADING,
	};
};

/**
 *
 * @returns {{type: string}}
 */
export const setPopupComplete = () => {
	return {
		type: SET_POPUP_COMPLETE,
	};
};
