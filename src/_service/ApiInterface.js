import ApiInterfaceAbstract from "./ApiInterfaceAbstract";

import {
	assessmentNextStep,
	assessmentPrevStep,
	assessmentStart,
	fetchDataError,
	fetchDataLoading,
	fetchDataSuccess,
	resetReducer,
	setPopupComplete,
	setPopupLoading, setUserId,
} from "../_actions";
import {
	ASSESSMENT_QUESTIONS_ENTITY,
	ASSESSMENT_TABLE_ENTITY,
	CHANGE_POSITION_ENTITY, DIVISIONS_ENTITY, EMPLOYEE_ENTITY, EMPLOYEES_ENTITY,
} from "../_store/entities";

import assessmentQuestions from "../_api/assessmentQuestions";

class ApiInterface extends ApiInterfaceAbstract {
	/**
	 * Constructor
	 *
	 * @param dispatch
	 */
	constructor() {
		super();

		this.userId = null;
		this.API_URL =
			"https://portal.veloplaneta.com.ua/hr/api/" ||
			process.env.API_URL;
	}

	/**
	 *
	 */
	getCurrentUserId(dispatch) {
		const cookie = document.cookie.match("(^|;) ?" + "userId" + "=([^;]*)(;|$)");

		dispatch(setUserId(cookie ? cookie[2] : null));

		return cookie ? cookie[2] : null;
	}

	/**
	 *
	 * @param dispatch
	 */
	fetchCurrentUser(dispatch) {
		const userId = this.getCurrentUserId(dispatch);

		dispatch(fetchDataLoading(EMPLOYEE_ENTITY));

		this._sendGet(this.API_URL + "employees/" + userId)
			.then(result => result.json())
			.then(json => dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, json)))
			.catch(() => dispatch(fetchDataError(EMPLOYEE_ENTITY)));

		return this;
	}

	fetchCompanyStructure(dispatch, id) {
		dispatch(fetchDataLoading(DIVISIONS_ENTITY));

		this._sendGet(this.API_URL + "employees/" + id + '/company')
			.then(result => result.json())
			.then(json => dispatch(fetchDataSuccess(DIVISIONS_ENTITY, json)))
			.catch(() => dispatch(fetchDataError(DIVISIONS_ENTITY)));
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

const instance = new ApiInterface();

Object.freeze(instance);

export default instance;
