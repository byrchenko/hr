import { fetchAnswers } from "../_service/ApiMethods";
import { fetchDataError, fetchDataLoading, fetchDataSuccess } from "./index";
import { ASSESSMENT_HR_DATA_ENTITY } from "../_store/entities";

/**
 *
 * @returns {function(...[*]=)}
 */
export const loadAnswers = () => {
	return (dispatch, getState) => {
		dispatch(fetchDataLoading(ASSESSMENT_HR_DATA_ENTITY));

		const {assessmentHr: {
			assessmentId,
			assessmentUser
		}} = getState()

		fetchAnswers(assessmentId, assessmentUser)
			.then(result => result.json())
			.then(json => {
				dispatch(fetchDataSuccess(ASSESSMENT_HR_DATA_ENTITY, json));
			})
			.catch(() => dispatch(fetchDataError(ASSESSMENT_HR_DATA_ENTITY)))
	}
};