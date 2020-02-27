import { ASSESSMENT_TABLE_ENTITY } from "../_store/entities";
import { fetchDataError, fetchDataLoading, fetchDataSuccess } from "./index";
import { fetchAssessmentList } from "../_service/ApiMethods";

/**
 *
 */
export const fetchAssessments = () => {
	return (dispatch, getState) => {
		dispatch(fetchDataLoading(ASSESSMENT_TABLE_ENTITY));

		const {employee: {id}} = getState();

		fetchAssessmentList(id)
			.then(result => result.json())
			.then(json => dispatch(fetchDataSuccess(ASSESSMENT_TABLE_ENTITY, json)))
			.catch(() => dispatch(fetchDataError(ASSESSMENT_TABLE_ENTITY)));
	}
};