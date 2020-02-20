import ApiInterfaceAbstract, { _sendGet } from "./RequestFactory";
import assessmentQuestions from "../_api/assessmentQuestions";

import {
	assessmentFinish,
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
	ASSESSMENT_HR_DATA_ENTITY,
	ASSESSMENT_QUESTIONS_ENTITY, ASSESSMENT_SETTINGS_ENTITY,
	ASSESSMENT_TABLE_ENTITY,
	CHANGE_POSITION_ENTITY,
	DIVISIONS_ENTITY,
	EMPLOYEE_ENTITY,
	EMPLOYEES_ENTITY, POSITIONS_ENTITY,
} from "../_store/entities";

/**
 * Api interface
 */
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

		_sendGet(this.API_URL + "employees/" + userId)
			.then(result => result.json())
			.then(json => dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, json)))
			.catch(() => dispatch(fetchDataError(EMPLOYEE_ENTITY)));

		return this;
	}

	addPosition(dispatch, title) {
		this._sendPut(this.API_URL + "positions/" + 64332, {
			title: "Skalar"
		})
			.then(result => result.json())
			.then(json => console.log(json))
			.catch(err => console.log(err));

		return this;
	}

	/**
	 *
	 * @param dispatch
	 * @param userId
	 */
	fetchAssessmentList(dispatch, userId) {
		dispatch(fetchDataLoading(ASSESSMENT_TABLE_ENTITY));

		this._sendGet(this.API_URL +  "employees/" + userId + '/assessments')
			.then(result => result.json())
			.then(json => dispatch(fetchDataSuccess(ASSESSMENT_TABLE_ENTITY, json)))
			.catch(() => dispatch(fetchDataError(ASSESSMENT_TABLE_ENTITY)));

		return this;
	}

	/**
	 *
	 * @param dispatch
	 * @param id
	 */
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
		function getUserId() {
			const cookie = document.cookie.match("(^|;) ?" + "userId" + "=([^;]*)(;|$)");

			return cookie ? cookie[2] : null;
		}

		return () => {
			dispatch(setPopupLoading());

			this._sendPut(this.API_URL + "employees/" + employee, {
				positionId: position,
			})
				.then(result => result.json())
				.then(() => {
					dispatch(setPopupComplete());
					this.fetchCompanyStructure(dispatch, getUserId())
				})
				.catch(() => dispatch(setPopupComplete()));
		};
	}

	/**
	 *
	 * @param dispatch
	 * @param assessment
	 * @param questions
	 * @param isLast
	 * @param goNext
	 * @returns {Promise<Response>}
	 */
	assessmentPushAnswer(dispatch, assessment, questions, isLast, goNext) {
		dispatch(fetchDataLoading(ASSESSMENT_QUESTIONS_ENTITY));

		return this._sendPut(this.API_URL + 'assessments/questions/' + assessment, {
			questions
		})
			.then(result => result.json())
			.then(json => console.log(json))
			.then(() => isLast ? dispatch(assessmentFinish()) : goNext())
			.catch(() => dispatch(fetchDataError(ASSESSMENT_QUESTIONS_ENTITY)));
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
	assessmentGoNext(dispatch, assessment, user, step) {
		dispatch(fetchDataLoading(ASSESSMENT_QUESTIONS_ENTITY));

		this._sendGet(this.API_URL + 'assessments/questions/' + assessment, {
			employeeId: user.id,
			step: step + 1
		})
			.then(result => result.json())
			.then(json => {
				dispatch(fetchDataSuccess(ASSESSMENT_QUESTIONS_ENTITY, json));
			})
			.catch(() => dispatch(fetchDataError(ASSESSMENT_QUESTIONS_ENTITY)));
	}

	/**
	 *
	 * @param dispatch
	 * @param assessment
	 * @param user
	 */
	assessmentStart(dispatch, assessment, user) {
		dispatch(fetchDataLoading(ASSESSMENT_QUESTIONS_ENTITY));

		this._sendGet(this.API_URL + 'assessments/questions/' + assessment, {
			employeeId: user.id
		})
			.then(result => result.json())
			.then(json => {
				dispatch(fetchDataSuccess(ASSESSMENT_QUESTIONS_ENTITY, json));
				dispatch(assessmentStart(user, assessment));
			})
			.catch(() => dispatch(fetchDataError(ASSESSMENT_QUESTIONS_ENTITY)));
	}

	/**
	 *
	 * @param dispatch
	 */
	fetchSettings(dispatch) {
		dispatch(fetchDataLoading(ASSESSMENT_SETTINGS_ENTITY));

		this._sendGet(this.API_URL + 'settings')
			.then(result => result.json())
			.then(json => {
				dispatch(fetchDataSuccess(ASSESSMENT_SETTINGS_ENTITY, json));
			})
			.catch(() => dispatch(fetchDataError(ASSESSMENT_SETTINGS_ENTITY)));
	}

	/**
	 *
	 */
	fetchPositions() {
		return dispatch => {
			dispatch(fetchDataLoading(POSITIONS_ENTITY));

			this._sendGet(this.API_URL + 'positions')
				.then(result => result.json())
				.then(json => {
					dispatch(fetchDataSuccess(POSITIONS_ENTITY, json));
				})
				.catch(() => dispatch(fetchDataError(POSITIONS_ENTITY)));
		}
	}

	/**
	 *
	 * @param assessmentId
	 * @param userId
	 * @returns {function(...[*]=)}
	 */
	fetchHrAnswers(assessmentId, userId) {
		return dispatch => {
			dispatch(fetchDataLoading(ASSESSMENT_HR_DATA_ENTITY));

			this._sendGet(this.API_URL + 'assessments/questions/' + assessmentId + '/hr', {
				employeeId: userId
			})
				.then(result => result.json())
				.then(json => {
					dispatch(fetchDataSuccess(ASSESSMENT_HR_DATA_ENTITY, json));
				})
				.catch(() => dispatch(fetchDataError(ASSESSMENT_HR_DATA_ENTITY)));
		}
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
