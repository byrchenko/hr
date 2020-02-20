import { fetchDataLoading } from "./index";
import { ASSESSMENT_HR_DATA_ENTITY } from "../_store/entities";
import ApiInterface from "../_service/ApiMethods";

/**
 *
 * @param assessmentId
 * @param answers
 * @returns {function(...[*]=)}
 */
export const pushAnswers = (assessmentId, answers) => {
	return dispatch => {
		dispatch(fetchDataLoading(ASSESSMENT_HR_DATA_ENTITY));

		ApiInterface
			.sendAnswers(assessmentId, answers)
			.then(result => result.json())
			.catch(err => console.warn(err));
	};
};