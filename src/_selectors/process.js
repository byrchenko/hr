import { createSelector } from "reselect";

/**
 *
 * @param state
 */

export const selectProcessUsers = state => {
	return state.assessmentProcess.employees;
};

/**
 *
 */
export const selectProcessHrUsers = createSelector(
	selectProcessUsers,
	users => {
		if (!users) {
			return null
		}

		return users.filter(user => user.role === 'hr')
	}
);