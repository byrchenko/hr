import {
	SETTINGS_SET_BLOCK_FILTER,
	SETTINGS_SET_COMPETENCE_FILTER
} from "../_store/types";

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