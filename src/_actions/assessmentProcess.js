import { closePopup, fetchDataError, fetchDataLoading, fetchDataSuccess } from "./index";
import { NEW_ASSESSMENT_ENTITY, PROCESS_ENTITY } from "../_store/entities";
import { addAssessment, fetchAssessmentsProcess } from "../_service/ApiMethods";
import { NEW_TASK_POPUP } from "../Popuper/popups";

/**
 *
 * @returns {function(...[*]=)}
 */
export const fetchAssessmentProcessData = () => {
	return dispatch => {
		dispatch(fetchDataLoading(PROCESS_ENTITY));

		fetchAssessmentsProcess()
			.then(response => response.json())
			.then(parsed => dispatch(fetchDataSuccess(PROCESS_ENTITY, parsed)))
			.catch(() => dispatch(fetchDataError(PROCESS_ENTITY)));
	};
};

/**
 *
 */
export const createAssessment = (
	title,
	startDate,
	endDate,
	employees,
	evaluatorId,
) => {
	return dispatch => {
		dispatch(fetchDataLoading(NEW_ASSESSMENT_ENTITY));

		addAssessment(
			title,
			startDate,
			endDate,
			employees,
			evaluatorId,
		)
			.then(response => {
				response.json();

				response.status === 201 
					? dispatch(closePopup(NEW_TASK_POPUP))
					: null
			})
			.catch(err => console.warn(err))
	};
};