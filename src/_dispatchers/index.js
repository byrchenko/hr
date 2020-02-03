/**
 *
 * @param store
 * @returns {*}
 */
export const locationSearch = store => {
	const {
		router: {
			location: { search },
		},
	} = store;

	return search;
};

/**
 *
 * @param store
 * @returns {null|*}
 */
export const role = store => {
	const {
		employee: { data },
	} = store;

	if (!data) {
		return null;
	}

	const { role } = data;

	return role;
};

/**
 *
 * @param store
 * @returns {*}
 */
export const employee = store => {
	const {
		employee: { data },
	} = store;

	return data;
};

/**
 *
 * @param store
 * @returns {*}
 */
export const divisions = store => {
	const {
		divisions: { data },
	} = store;

	return data;
};

/**
 *
 * @param store
 * @returns {*}
 */
export const changePosition = store => {
	const { changePosition } = store;

	return changePosition;
};

/**
 *
 * @param store
 * @returns {*}
 */
export const shownPopup = store => {
	const {
		popups: { show },
	} = store;

	return show;
};

/**
 *
 * @param store
 * @returns {*}
 */
export const isLoadingPopup = store => {
	const {
		popups: { loading },
	} = store;

	return loading;
};

/**
 *
 * @param store
 * @returns {*}
 */
export const employeeDataPopup = store => {
	const {
		popups: { data },
	} = store;

	if (!data) {
		return null;
	}

	const { employee } = data;

	return employee;
};

/**
 *
 * @param store
 * @returns {null|*}
 */
export const positionDataPopup = store => {
	const {
		popups: { data },
	} = store;

	if (!data) {
		return null;
	}

	const { position } = data;

	return position;
};
