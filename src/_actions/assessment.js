import { ASSESSMENT_QUESTIONS_ENTITY } from "../_store/entities";
import { sendAnswers } from "../_service/ApiMethods";

import {
	assessmentStart,
	closeAssessment,
	fetchDataError,
	fetchDataLoading,
	fetchDataSuccess,
} from "./index";

/**
 *
 * @returns {function(...[*]=)}
 */
export const pushAnswers = (assessmentId, questions, cb) => {
	return dispatch => {
		dispatch(fetchDataLoading(ASSESSMENT_QUESTIONS_ENTITY));

		sendAnswers(assessmentId, questions)
			.then(result => result.json())
			.then(() => dispatch(cb()))
			.catch(() => dispatch(fetchDataError(ASSESSMENT_QUESTIONS_ENTITY)));
	};
};

/**
 *
 * @param assessmentId
 * @param employee
 * @returns {function(...[*]=)}
 */
export const startAssessment = (assessmentId, employee) => {
	return dispatch => {
		dispatch(assessmentStart(employee, assessmentId));

		dispatch(fetchQuestions(assessmentId, employee.id, 1))
	}
};

/**
 *
 */
export const nextStep = (questions) => {
	return (dispatch, getState) => {
		const {
			assessmentQuestions: {
				assessmentId,
				employee,
				position,
			},
		} = getState();

		dispatch(pushAnswers(
			assessmentId,
			questions,
			() => dispatch(fetchQuestions(assessmentId, employee.id, position + 1)),
			),
		);
	};
};

/**
 *
 */
export const finishAssessment = (questions) => {
	return (dispatch, getState) => {
		const {
			assessmentQuestions: { assessmentId },
		} = getState();

		dispatch(pushAnswers(
			assessmentId,
			questions,
			() => dispatch(closeAssessment()),
			),
		);
	};
};

/**
 *
 */
export const fetchQuestions = (assessmentId, userId, step) => {
	return dispatch => {
		dispatch(fetchDataLoading(ASSESSMENT_QUESTIONS_ENTITY));

		fetchQuestions(assessmentId, userId, step)
			.then(result => result.json())
			.then(json => dispatch(fetchDataSuccess(
				ASSESSMENT_QUESTIONS_ENTITY,
				json,
			)))
			.catch(() => dispatch(fetchDataError(ASSESSMENT_QUESTIONS_ENTITY)));
	};
};
