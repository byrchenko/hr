import { fetchDataError, fetchDataLoading, fetchDataSuccess } from "./index";
import { EMPLOYEE_ENTITY } from "../_store/entities";
import { fetchCurrentUser } from "../_service/ApiMethods";

/**
 *
 */
export const fetchEmployee = () => {
	return (dispatch, getState) => {
		const userId = getState().employee.id;

		dispatch(fetchDataLoading(EMPLOYEE_ENTITY));

		fetchCurrentUser(userId)
			.then(result => result.json())
			.then(json => dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, json)))
			.catch(() => dispatch(fetchDataError(EMPLOYEE_ENTITY)))
	}
};