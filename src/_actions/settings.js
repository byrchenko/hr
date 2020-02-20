import {
	SETTINGS_SET_BLOCK_FILTER,
	SETTINGS_SET_COMPETENCE_FILTER
} from "../_store/types";
import { fetchDataError, fetchDataLoading, fetchDataSuccess } from "./index";
import { ASSESSMENT_SETTINGS_ENTITY } from "../_store/entities";
import { fetchSettings } from "../_service/ApiMethods";

/**
 *
 * @param filter
 * @returns {{payload: *, type: string}}
 */
export const setBlockFilter = filter => {
	return {
		type: SETTINGS_SET_BLOCK_FILTER,
		payload: filter
	}
};

/**
 *
 * @param filter
 * @returns {{payload: *, type: string}}
 */
export const setCompetenceFilter = filter => {
	return {
		type: SETTINGS_SET_COMPETENCE_FILTER,
		payload: filter
	}
};

/**
 *
 * @returns {function(...[*]=)}
 */
export const loadSetting = () => {
	return dispatch => {
		dispatch(fetchDataLoading(ASSESSMENT_SETTINGS_ENTITY));

		fetchSettings()
			.then(result => result.json())
			.then(json => {
				dispatch(fetchDataSuccess(ASSESSMENT_SETTINGS_ENTITY, json));
			})
			.catch(() => dispatch(fetchDataError(ASSESSMENT_SETTINGS_ENTITY)));
	}
};
