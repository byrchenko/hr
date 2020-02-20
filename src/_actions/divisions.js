import { fetchDataError, fetchDataLoading, fetchDataSuccess } from "./index";
import { DIVISIONS_ENTITY } from "../_store/entities";
import { fetchCompanyStructure } from "../_service/ApiMethods";

/**
 *
 * @returns {function(...[*]=)}
 */

export const fetchDivisions = () => {
	return (dispatch, getState) => {
		dispatch(fetchDataLoading(DIVISIONS_ENTITY));

		const {employee: {id}} = getState();

		fetchCompanyStructure(id)
			.then(result => result.json())
			.then(json => dispatch(fetchDataSuccess(DIVISIONS_ENTITY, json)))
			.catch(() => dispatch(fetchDataError(DIVISIONS_ENTITY)));
	}
};