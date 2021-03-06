import {
	fetchSuccessHandler,
	fetchErrorHandler,
	fetchLoadingHandler,
} from "../_store/reducer";

import {
	ADD_VALIDATION_ERROR,
	ADD_VALIDATION_ERRORS,
	ASSESSMENT_ADD_ANSWER,
	ASSESSMENT_FINISH,
	ASSESSMENT_NEXT_STEP,
	ASSESSMENT_PREV_STEP,
	ASSESSMENT_SET_EMPLOYEE,
	ASSESSMENT_START,
	CLEAR_VALIDATION_ERRORS,
	FETCH_ERROR,
	FETCH_LOADING,
	FETCH_SUCCESS,
} from "../_store/types";

import { ASSESSMENT_QUESTIONS_ENTITY } from "../_store/entities";

export const initialState = {
	employee: null,
	assessment: null,
	isStarted: false,
	answers: null,
	step: 1,
	data: null,
	validationErrors: null,
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
	[ASSESSMENT_START]: (state, action) => {
		const {
			payload: {
				employee,
				assessment,
			},
		} = action;

		return Object.assign({}, state, {
			isStarted: true,
			employee,
			assessment,
		});
	},

	/**
	 *
	 * @param state
	 * @param action
	 */
	[ASSESSMENT_ADD_ANSWER]: (state, action) => {
		const { payload } = action;
		const { answers } = state;

		if (!answers) {
			return Object.assign({}, state, {
				answers: [payload],
			});
		}

		if (!isExistById(answers, payload.id)) {
			answers.push(payload);

			return Object.assign({}, state, { answers });
		}

		return Object.assign({}, state, {
			answers: updateItem(answers, payload),
		});
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
	 * @param action
	 */
	[ADD_VALIDATION_ERRORS]: (state, action) => {
		const { payload } = action;

		return Object.assign({}, state, {
			validationErrors: payload,
		});
	},

	/**
	 *
	 * @param state
	 * @returns {any}
	 */
	[CLEAR_VALIDATION_ERRORS]: state => {
		return Object.assign({}, state, { validationErrors: null });
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
 * @param arr
 * @param item
 * @returns {*}
 */
function updateItem(arr, item) {
	return arr.map(el => {
		if (el.id === item.id) {
			return item;
		}

		return el;
	});
}

/**
 *
 * @param arr
 * @param id
 * @returns {boolean}
 */
function isExistById(arr, id) {
	const item = arr.find(el => {
		return el.id === id;
	});

	return item !== undefined;
}

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
