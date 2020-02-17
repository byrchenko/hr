import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import employee from "../_reducers/employee";
import assessmentEmployees from "../_reducers/assessmentEmployees";
import divisions from "../_reducers/divisions";
import popups from "../_reducers/popups";
import assessmentQuestions from "../_reducers/assessmentQuestions";
import assessmentHr from "../_reducers/assessmentHr";
import settings from "../_reducers/settings";
import assessmentProcess from "../_reducers/process";

/**
 *
 * @param history
 */
export default history =>
	combineReducers({
		router: connectRouter(history),
		employee,
		assessmentEmployees,
		divisions,
		popups,
		assessmentQuestions,
		assessmentHr,
		settings,
		assessmentProcess
	});

/**
 *
 * @param state
 * @param data
 * @returns {any}
 */
export function fetchSuccessHandler(state, data) {
	return Object.assign({}, state, {
		data,
		error: false,
		loading: false,
		sync: true,
	});
}

/**
 *
 * @param state
 * @returns {any}
 */
export function fetchLoadingHandler(state) {
	return Object.assign({}, state, {
		error: false,
		loading: true,
		sync: false,
	});
}

/**
 *
 * @param state
 * @returns {any}
 */
export function fetchErrorHandler(state) {
	return Object.assign({}, state, {
		error: true,
		loading: false,
		sync: false,
	});
}

/**
 *
 * @param list
 * @returns {{}}
 */
export function listById(list) {
	let result = {};

	list.forEach(item => {
		result[item.id] = item;
	});

	return result;
}
