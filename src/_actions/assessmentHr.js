import { fetchAnswers, sendAnswers, sendTasks } from "../_service/ApiMethods";
import { fetchDataError, fetchDataLoading, fetchDataSuccess } from "./index";
import { ASSESSMENT_HR_DATA_ENTITY } from "../_store/entities";
import { ASSESSMENT_HR_END } from "../_store/types";

/**
 *
 */
export const loadAnswers = () => {
	return (dispatch, getState) => {
		dispatch(fetchDataLoading(ASSESSMENT_HR_DATA_ENTITY));

		const {
			assessmentHr: {
				assessmentId,
				assessmentUser,
			},
		} = getState();

		fetchAnswers(assessmentId, assessmentUser)
			.then(result => result.json())
			.then(json => {
				dispatch(fetchDataSuccess(ASSESSMENT_HR_DATA_ENTITY, json));
			})
			.catch(() => dispatch(fetchDataError(ASSESSMENT_HR_DATA_ENTITY)));
	};
};

/**
 *
 */
export const finishHrAssessment = (tasks, answers, assessmentId) => {
	return dispatch => {
		dispatch(fetchDataLoading(ASSESSMENT_HR_DATA_ENTITY));

		Promise.all([
			sendTasks(tasks),
			sendAnswers(assessmentId, answers)
		])
			.then(() => dispatch({type: ASSESSMENT_HR_END}))
			.catch(err => {
				console.warn(err);

				dispatch(fetchDataError(ASSESSMENT_HR_DATA_ENTITY))
			})
	};
};