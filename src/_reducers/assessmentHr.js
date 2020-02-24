import {
	fetchSuccessHandler,
	fetchErrorHandler,
	fetchLoadingHandler,
} from "../_store/reducer";

import {
	ASSESSMENT_HR_END,
	ASSESSMENT_HR_START,
	FETCH_ERROR,
	FETCH_LOADING,
	FETCH_SUCCESS,
} from "../_store/types";

import { ASSESSMENT_HR_DATA_ENTITY } from "../_store/entities";

export const initialState = {
	data: null,
	loading: false,
	error: false,
	sync: false,
	isActive: false,
	assessmentId: null,
	assessmentUser: null
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

		if (entity === ASSESSMENT_HR_DATA_ENTITY) {
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

		if (entity === ASSESSMENT_HR_DATA_ENTITY) {
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

		if (entity === ASSESSMENT_HR_DATA_ENTITY) {
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
	[ASSESSMENT_HR_START]: (state, action) => {
		const {payload: {
			assessment,
			user
		}} = action;

		return Object.assign({}, state, {
			isActive: true,
			assessmentId: assessment,
			assessmentUser: user
		});
	},

	/**
	 *
	 * @param state
	 * @param action
	 */
	[ASSESSMENT_HR_END]: () => {
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
