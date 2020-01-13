import {
	fetchSuccessHandler,
	fetchErrorHandler,
	fetchLoadingHandler
} from "../_store/reducer";

import {
	FETCH_ERROR,
	FETCH_LOADING,
	FETCH_SUCCESS,
} from "../_store/types";

import {EMPLOYEE_ENTITY} from "../_store/entities";

export const initialState = {
	data: null,
	loading: false,
	error: false,
	sync: false,
};


const handler = {

	/**
	 *
	 * @param state
	 * @param action
	 * @returns {handler.FETCH_SUCCESS.props}
	 * @constructor
	 */
	[FETCH_SUCCESS]: (state, action) => {
		const {entity, data} = action;

		if (entity === EMPLOYEE_ENTITY) {
			return fetchSuccessHandler(state, data)
		}

		return state;
	},

	/**
	 *
	 * @param state
	 * @param action
	 * @returns {handler.FETCH_LOADING.props}
	 * @constructor
	 */
	[FETCH_LOADING]: (state, action) => {
		const {entity} = action;

		if (entity === EMPLOYEE_ENTITY) {
			return fetchLoadingHandler(state)
		}

		return state;
	},

	/**
	 *
	 * @param state
	 * @param action
	 * @returns {handler.FETCH_ERROR.props}
	 * @constructor
	 */
	[FETCH_ERROR]: (state, action) => {
		const {entity} = action;

		if (entity === EMPLOYEE_ENTITY) {
			return fetchErrorHandler(state)
		}

		return state;
	},

	/**
	 *
	 * @param state
	 * @returns {*}
	 */
	default: state => state,
};

export default (state = initialState, action) => {
	const reducer = handler[action.type]  || handler.default;

	return reducer(state, action);
}