import {
	SETTINGS_SET_BLOCK_FILTER,
	SETTINGS_SET_COMPETENCE_FILTER,
} from "../_store/types";
import { closePopup, fetchDataError, fetchDataLoading, fetchDataSuccess } from "./index";
import { ASSESSMENT_SETTINGS_ENTITY } from "../_store/entities";
import {
	addBlock, addCompetence,
	addPosition,
	deleteBlock, deleteCompetence,
	deletePosition,
	editBlock, editCompetence,
	editPosition,
	fetchSettings,
} from "../_service/ApiMethods";
import {
	ADD_BLOCK_POPUP,
	ADD_COMPETENCY_POPUP,
	ADD_POSITION_POPUP, EDIT_BLOCK_POPUP,
	EDIT_COMPETENCY_POPUP,
	EDIT_POSITION_POPUP,
} from "../Popuper/popups";

/**
 *
 * @param filter
 * @returns {{payload: *, type: string}}
 */
export const setBlockFilter = filter => {
	return {
		type: SETTINGS_SET_BLOCK_FILTER,
		payload: filter,
	};
};

/**
 *
 * @param filter
 * @returns {{payload: *, type: string}}
 */
export const setCompetenceFilter = filter => {
	return {
		type: SETTINGS_SET_COMPETENCE_FILTER,
		payload: filter,
	};
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
	};
};

/**
 *
 * @param title
 * @returns {function(...[*]=)}
 */
export const settingsAddPosition = (title) => {
	return dispatch => {
		addPosition(title)
			.then(response => {
				response.status === 201
					? dispatch(closePopup(ADD_POSITION_POPUP))
					: console.warn("Unsuccessful adding position!");

				dispatch(loadSetting());
			})
			.catch(err => console.warn(err));
	};
};

/**
 *
 * @param id
 * @param title
 * @returns {function(...[*]=)}
 */
export const settingsEditPosition = (id, title) => {
	return dispatch => {
		editPosition(id, title)
			.then(response => {
				response.status === 201
					? dispatch(closePopup(EDIT_POSITION_POPUP))
					: console.warn("Unsuccessful editing position!");

				dispatch(loadSetting());
			})
			.catch(err => console.warn(err));
	};
};

/**
 *
 * @param id
 * @returns {function(...[*]=)}
 */
export const settingsDeletePosition = (id) => {
	return dispatch => {
		deletePosition(id)
			.then(response => {
				response.status === 200
					? dispatch(loadSetting())
					: console.warn("Unsuccessful deleting position!");
			})
			.catch(err => console.warn(err));
	};
};

/**
 *
 * @param title
 * @param description
 * @param positionId
 * @returns {function(...[*]=)}
 */
export const settingsAddBlock = (title, description, positionId) => {
	return dispatch => {
		addBlock(title, description, positionId)
			.then(response => {
				response.status === 201
					? dispatch(closePopup(ADD_BLOCK_POPUP))
					: console.warn("Unsuccessful adding position!");

				dispatch(loadSetting());
			})
			.catch(err => console.warn(err));
	};
};

/**
 *
 * @param id
 * @param title
 * @param description
 * @returns {function(...[*]=)}
 */
export const settingsEditBlock = (id, title, description) => {
	return dispatch => {
		editBlock(id, title, description)
			.then(response => {
				response.status === 201
					? dispatch(closePopup(EDIT_BLOCK_POPUP))
					: console.warn("Unsuccessful editing position!");

				dispatch(loadSetting());
			})
			.catch(err => console.warn(err));
	};
};

/**
 *
 * @param id
 * @returns {function(...[*]=)}
 */
export const settingsDeleteBlock = (id) => {
	return dispatch => {
		deleteBlock(id)
			.then(response => {
				response.status === 200
					? 	dispatch(loadSetting())
					: console.warn("Unsuccessful deleting position!");
			})
			.catch(err => console.warn(err));
	};
};

/**
 *
 * @param title
 * @param description
 * @param blockId
 * @returns {function(...[*]=)}
 */
export const settingsAddCompetence = (title, description, blockId) => {
	return dispatch => {
		addCompetence(title, description, blockId)
			.then(response => {
				response.status === 201
					? dispatch(closePopup(ADD_COMPETENCY_POPUP))
					: console.warn("Unsuccessful adding position!");

				dispatch(loadSetting());
			})
			.catch(err => console.warn(err));
	};
};

/**
 *
 * @param id
 * @param title
 * @param description
 * @returns {function(...[*]=)}
 */
export const settingsEditCompetence = (id, title, description) => {
	return dispatch => {
		editCompetence(id, title, description)
			.then(response => {
				response.status === 200
					? dispatch(closePopup(EDIT_COMPETENCY_POPUP))
					: console.warn("Unsuccessful editing position!");

				dispatch(loadSetting());
			})
			.catch(err => console.warn(err));
	};
};

/**
 *
 * @param id
 * @returns {function(...[*]=)}
 */
export const settingsDeleteCompetence = (id) => {
	return dispatch => {
		deleteCompetence(id)
			.then(response => {
				response.status === 200
					? dispatch(loadSetting())
					: console.warn("Unsuccessful deleting position!");
			})
			.catch(err => console.warn(err));
	};
};

