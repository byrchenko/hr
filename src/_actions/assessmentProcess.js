import {
	closePopup,
	fetchDataError,
	fetchDataLoading,
	fetchDataSuccess
} from "./index";

import {
	NEW_ASSESSMENT_ENTITY,
	PROCESS_ENTITY
} from "../_store/entities";

import {
	addAssessment,
	editAssessmentRequest,
	fetchAssessmentsProcess,
	fetchEmployees,
} from "../_service/ApiMethods";

import { NEW_TASK_POPUP } from "../Popuper/popups";
import { FETCH_USERS_SUCCESS } from "../_store/types";

/**
 *
 * @returns {function(...[*]=)}
 */
export const fetchAssessmentProcessData = () => {
	return dispatch => {
		dispatch(fetchDataLoading(PROCESS_ENTITY));

		Promise.all([
			fetchAssessmentsProcess(),
			fetchEmployees()
		])
			.then(response => {
				response[0].json()
					.then(parsed => dispatch(fetchDataSuccess(PROCESS_ENTITY, parsed)));

				response[1].json()
			})
			.then(parsed => dispatch(fetchDataSuccess(PROCESS_ENTITY, parsed)))
			.catch(() => dispatch(fetchDataError(PROCESS_ENTITY)));
	};
};

/**
 *
 */
export const createAssessment = assessment => {
	return dispatch => {
		dispatch(fetchDataLoading(NEW_ASSESSMENT_ENTITY));

		addAssessment(assessment)
			.then(response => {
				if (response.status === 201) {
					dispatch(closePopup(NEW_TASK_POPUP));

					dispatch(fetchAssessmentProcessData());
				}
			})
			.catch(err => console.warn(err));
	};
};

/**
 * Edit assessment
 *
 * @param assessment
 */
export const editAssessment = assessment => {
	return dispatch => {
		dispatch(fetchDataLoading(NEW_ASSESSMENT_ENTITY));

		editAssessmentRequest(assessment)
			.then(response => {
				if (response.status === 201) {
					dispatch(closePopup(NEW_TASK_POPUP));

					dispatch(fetchAssessmentProcessData());
				}
			})
			.catch(err => console.warn(err))
	}
};

/**
 *
 */
export const fetchProcessUsers = () => {
	return dispatch => {
		fetchEmployees()
			.then(response => response.json())
			.then(parsed => dispatch({
				type: FETCH_USERS_SUCCESS,
				payload: parsed
			}))
			.then(err => console.warn(err))
	}
};