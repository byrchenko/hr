import {
	fetchSuccessHandler,
	fetchErrorHandler,
	fetchLoadingHandler,
} from "../_store/reducer";

import {
	ASSESSMENT_FINISH,
	ASSESSMENT_NEXT_STEP,
	ASSESSMENT_PREV_STEP,
	ASSESSMENT_SET_EMPLOYEE,
	ASSESSMENT_START,
	FETCH_ERROR,
	FETCH_LOADING,
	FETCH_SUCCESS,
} from "../_store/types";

import { ASSESSMENT_QUESTIONS_ENTITY } from "../_store/entities";

export const initialState = {
	employee: null,
	isStarted: false,
	answers: null,
	step: 1,
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
		const { entity, data } = action;

		if (entity === ASSESSMENT_QUESTIONS_ENTITY) {
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

		if (entity === ASSESSMENT_QUESTIONS_ENTITY) {
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

		if (entity === ASSESSMENT_QUESTIONS_ENTITY) {
			return fetchErrorHandler(state);
		}

		return state;
	},

	/**
	 *
	 * @param state
	 * @returns {any}
	 */
	[ASSESSMENT_START]: state => {
		return Object.assign({}, state, { isStarted: true });
	},

	/**
	 *
	 * @param state
	 * @param action
	 */
	[ASSESSMENT_SET_EMPLOYEE]: (state, action) => {
		const { payload } = action;

		return Object.assign({}, state, { employee: payload });
	},

	/**
	 *
	 * @param state
	 * @param action
	 * @returns {any}
	 */
	[ASSESSMENT_NEXT_STEP]: state => {
		const { step } = state;

		return Object.assign({}, state, {
			step: step + 1,
		});
	},

	/**
	 *
	 * @param state
	 * @param action
	 */
	[ASSESSMENT_PREV_STEP]: state => {
		const { step } = state;

		if (step === 1) {
			return state;
		}

		return Object.assign({}, state, {
			step: step - 1,
		});
	},

	/**
	 *
	 * @param state
	 * @param action
	 */
	[ASSESSMENT_FINISH]: () => {
		return initialState;
	},

	/**
	 *
	 * @param state
	 * @returns {*}
	 */
	default: state => state,
};

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default (state = initialState, action) => {
	const reducer = handler[action.type] || handler.default;

	return reducer(state, action);
};
