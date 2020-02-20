import { setPopupComplete, setPopupLoading } from "./index";
import { changeUserPosition, fetchCompanyStructure } from "../_service/ApiMethods";
import { fetchDivisions } from "./divisions";

/**
 *
 */
export const changePosition = (userId, positionId) => {
	return dispatch => {
		dispatch(setPopupLoading());

		changeUserPosition(userId, positionId)
			.then(result => result.json())
			.then(() => {
				dispatch(setPopupComplete());
				dispatch(fetchDivisions(userId))
			})
			.catch(() => dispatch(setPopupComplete()));
	};
};