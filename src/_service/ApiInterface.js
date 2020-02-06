import ApiInterfaceAbstract from "./ApiInterfaceAbstract";
import store from "../_store";
import {
	assessmentNextStep,
	assessmentPrevStep,
	assessmentStart,
	fetchDataError,
	fetchDataLoading,
	fetchDataSuccess,
	resetReducer,
	setPopupComplete,
	setPopupLoading,
} from "../_actions";
import {
	ASSESSMENT_QUESTIONS_ENTITY,
	ASSESSMENT_TABLE_ENTITY,
	CHANGE_POSITION_ENTITY,
} from "../_store/entities";
import {
	SET_POPUP_COMPLETE,
	SET_POPUP_LOADING,
} from "../_store/types";
import assessmentQuestions from "../_api/assessmentQuestions";

class ApiInterface extends ApiInterfaceAbstract {
	/**
	 * Constructor
	 *
	 * @param dispatch
	 */
	constructor(dispatch) {
		super();

		this.dispatch = dispatch;
		this.API_URL =
			"https://portal.veloplaneta.com.ua/hr/api/" ||
			process.env.API_URL;
	}

	/**
	 *
	 * @param dispatch
	 * @param employee
	 * @param position
	 */
	changeUserPosition(dispatch, employee, position) {
		return () => {
			dispatch(setPopupLoading());

			// fetch()
			// 	.then(result => result.json())
			// 	.then(json => {
			// 		this.dispatch(
			// 			fetchDataSuccess(CHANGE_POSITION_ENTITY, json),
			// 		);
			// 		this.dispatch(resetReducer(CHANGE_POSITION_ENTITY));
			// 	})
			// 	.catch(() =>
			// 		this.dispatch(fetchDataError(CHANGE_POSITION_ENTITY)),
			// 	);

			setTimeout(() => {
				dispatch(setPopupComplete());
			}, 3000);
		};
	}

	/**
	 *
	 * @returns {function(...[*]=)}
	 */
	assessmentGoPrev(dispatch) {
		dispatch(fetchDataLoading(ASSESSMENT_QUESTIONS_ENTITY));

		mockFetch(assessmentQuestions).then(result => {
			dispatch(assessmentPrevStep());

			dispatch(
				fetchDataSuccess(ASSESSMENT_QUESTIONS_ENTITY, result),
			);
		});
	}

	/**
	 *
	 * @returns {function(...[*]=)}
	 */
	assessmentGoNext(dispatch) {
		dispatch(fetchDataLoading(ASSESSMENT_QUESTIONS_ENTITY));

		mockFetch(assessmentQuestions).then(result => {
			dispatch(assessmentNextStep());

			dispatch(
				fetchDataSuccess(ASSESSMENT_QUESTIONS_ENTITY, result),
			);
		});
	}

	/**
	 *
	 * @param dispatch
	 * @param user
	 */
	assessmentStart(dispatch, user) {
		dispatch(fetchDataLoading(ASSESSMENT_TABLE_ENTITY));

		mockFetch(assessmentQuestions).then(result => {
			dispatch(
				fetchDataSuccess(ASSESSMENT_QUESTIONS_ENTITY, result),
			);

			dispatch(assessmentStart(user));
		});
	}
}

/**
 *
 * @param result
 * @returns {Promise<unknown>}
 */
function mockFetch(result) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(result);
		}, 300);
	});
}

const instance = new ApiInterface(store.dispatch);

Object.freeze(instance);

export default instance;
