import {
	ADD_VALIDATION_ERRORS,
	ASSESSMENT_ADD_ANSWER,
	ASSESSMENT_FINISH, ASSESSMENT_HR_START,
	ASSESSMENT_NEXT_STEP,
	ASSESSMENT_PREV_STEP,
	ASSESSMENT_START,
	CLEAR_VALIDATION_ERRORS,
	CLOSE_POPUP,
	FETCH_ERROR,
	FETCH_LOADING,
	FETCH_SUCCESS,
	OPEN_POPUP,
	RESET_REDUCER,
	SET_NEW_POSITION_POPUP,
	SET_POPUP_COMPLETE,
	SET_POPUP_LOADING, SET_USER_ID,
} from "../_store/types";

/**
 *
 * @param id
 * @returns {{payload: *, type: string}}
 */
export const setUserId = id => {
	return {
		type: SET_USER_ID,
		payload: id
	}
};

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

export const assessmentNextStep = () => {
	return {
		type: ASSESSMENT_NEXT_STEP,
	};
};

/**
 *
 * @returns {{type: string}}
 */
export const assessmentPrevStep = () => {
	return {
		type: ASSESSMENT_PREV_STEP,
	};
};

/**
 *
 */
export const assessmentFinish = () => {
	return {
		type: ASSESSMENT_FINISH,
	};
};

/**
 *
 */
export const assessmentStart = (employee, assessment) => {
	return {
		type: ASSESSMENT_START,
		payload: {
			employee,
			assessment
		},
	};
};

/**
 *
 */
export const addAnswer = answer => {
	return {
		type: ASSESSMENT_ADD_ANSWER,
		payload: answer,
	};
};

/**
 *
 * @returns {{payload: {id: *, type: *}, type: string}}
 * @param errors
 */
export const addValidationErrors = errors => {
	return {
		type: ADD_VALIDATION_ERRORS,
		payload: errors,
	};
};

/**
 *
 */
export const clearValidationErrors = () => {
	return {
		type: CLEAR_VALIDATION_ERRORS,
	};
};

/**
 *
 * @returns {{type: string}}
 */
export const assessmentHrStart = (assessmentId, assessmentUser) => {
	return {
		type: ASSESSMENT_HR_START,
		payload: {
			assessment: assessmentId,
			user: assessmentUser
		}
	}
};