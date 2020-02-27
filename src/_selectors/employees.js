import {createSelector} from "reselect";

/**
 *
 * @param state
 */
export const getCompany = state => {
	return state.divisions.data;
};



/**
 *
 * @param list
 * @param employees
 * @returns {null}
 */
const getUsers = (list, employees) => {
	if ( !Array.isArray(list) ) {
		return null;
	}

	list.map(item => {
		item.employees ? employees.push(...item.employees) : null;

		getUsers(item.children, employees)
	})
};

/**
 *
 */
export const selectUsers = createSelector(
	getCompany,
	company => {
		const combiner = [];

		getUsers(company, combiner);

		return [...new Set(combiner)];
	}
);

