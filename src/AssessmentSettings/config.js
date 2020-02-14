import {
	ADD_BLOCK_POPUP, ADD_COMPETENCY_POPUP, ADD_POSITION_POPUP,
	EDIT_BLOCK_POPUP,
	EDIT_COMPETENCY_POPUP,
	EDIT_POSITION_POPUP,
} from "../Popuper/popups";

/**
 * Labels for inputs in popup
 */
export const labels = {
	[ADD_BLOCK_POPUP]: {
		title: "Наименование блока",
		description: "Описание блока",
	},

	[EDIT_BLOCK_POPUP]: {
		title: "Наименование блока",
		description: "Описание блока",
	},

	[ADD_POSITION_POPUP]: {
		title: "Наименование должности",
		description: "Описание должности",
	},

	[EDIT_POSITION_POPUP]: {
		title: "Наименование должности",
		description: "Описание должности",
	},

	[ADD_COMPETENCY_POPUP]: {
		title: "Наименование компетенции",
		description: "Описание компетенции",
	},

	[EDIT_COMPETENCY_POPUP]: {
		title: "Наименование компетенции",
		description: "Описание компетенции",
	},
};

/**
 * Load current item data when editing
 *
 * @param type
 * @param params
 */
export function getDefaultData(type, params) {
	switch (type) {
		case EDIT_POSITION_POPUP:
			return {
				title: params
					? params.title
					: "",
				description: "",
			};
		case EDIT_BLOCK_POPUP:
			return {
				title: params
					? params.title
					: "",
				description: params
					? params.description
					: "",
			};
		case EDIT_COMPETENCY_POPUP:
			return {
				title: params
					? params.title
					: "",
				description: params
					? params.description
					: "",
			};
		default:
			return {
				title: "",
				description: "",
			};
	}
}