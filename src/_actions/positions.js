import { fetchPositions } from "../_service/ApiMethods";
import { POSITIONS_ENTITY } from "../_store/entities";
import { fetchDataError, fetchDataLoading, fetchDataSuccess } from "./index";

/**
 *
 */
export const loadPositions = () => {
	return dispatch => {
		dispatch(fetchDataLoading(POSITIONS_ENTITY));

		fetchPositions()
			.then(result => result.json())
			.then(json => {
				dispatch(fetchDataSuccess(POSITIONS_ENTITY, json));
			})
			.catch(() => dispatch(fetchDataError(POSITIONS_ENTITY)));
	}
};