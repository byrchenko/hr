import {
	fetchSuccessHandler,
	fetchErrorHandler,
	fetchLoadingHandler,
} from "../_store/reducer";

import {
	FETCH_ERROR,
	FETCH_LOADING,
	FETCH_SUCCESS,
	RESET_REDUCER,
	SET_NEW_USER_POSITION,
} from "../_store/types";

import { CHANGE_POSITION_ENTITY } from "../_store/entities";

export const initialState = {
	data: null,
	newPosition: null,
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
		const { entity, data } = action;

		if (entity === CHANGE_POSITION_ENTITY) {
			return fetchSuccessHandler(state, data);
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
		const { entity } = action;

		if (entity === CHANGE_POSITION_ENTITY) {
			return fetchLoadingHandler(state);
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
		const { entity } = action;

		if (entity === CHANGE_POSITION_ENTITY) {
			return fetchErrorHandler(state);
		}

		return state;
	},

	/**
	 *
	 * @param state
	 * @param action
	 * @returns {any}
	 */
	[SET_NEW_USER_POSITION]: (state, action) => {
		const { payload } = action;

		return Object.assign({}, state, { newPosition: payload });
	},

	/**
	 *
	 * @param state
	 * @param action
	 * @returns {any}
	 */
	[RESET_REDUCER]: () => {
		return Object.assign({}, initialState);
	},

	/**
	 *
	 * @param state
	 * @returns {*}
	 */
	default: state => state,
};

export default (state = initialState, action) => {
	const reducer = handler[action.type] || handler.default;

	return reducer(state, action);
};
