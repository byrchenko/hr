import {
	OPEN_POPUP,
	CLOSE_POPUP,
	SET_POPUP_LOADING,
	SET_POPUP_COMPLETE,
	SET_NEW_POSITION_POPUP,
} from "../_store/types";

/**
 *
 * @type {{show: null}}
 */
export const initialState = {
	show: null,
	data: null,
	loading: false,
	completed: false,
};

const handler = {
	/**
	 *
	 * @param state
	 * @param action
	 */
	[OPEN_POPUP]: (state, action) => {
		const {
			payload: { type, data },
		} = action;

		return Object.assign({}, state, {
			show: type,
			data,
		});
	},

	/**
	 *
	 * @param state
	 * @param action
	 */
	[CLOSE_POPUP]: (state, action) => {
		const { payload } = action;
		const { show } = state;

		if (payload !== show) {
			return state;
		}

		return initialState;
	},

	/**
	 *
	 * @param state
	 * @param action
	 * @returns {any}
	 */
	[SET_POPUP_LOADING]: state => {
		return Object.assign({}, state, { loading: true });
	},

	/**
	 *
	 * @param state
	 * @param action
	 * @returns {any}
	 */
	[SET_POPUP_COMPLETE]: () => {
		return initialState;
	},

	[SET_NEW_POSITION_POPUP]: (state, action) => {
		const { data } = state;
		const { payload } = action;

		if (!data) {
			return Object.assign({}, state, { data: payload });
		}

		const newData = Object.assign({}, data, {
			position: payload,
		});

		return Object.assign({}, state, { data: newData });
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
