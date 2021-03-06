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

/**
 *
 * @param state
 */
export const isStartedAssessment = state => {
	const {
		assessmentQuestions: { isStarted },
	} = state;

	return isStarted;
};

/**
 *
 * @param state
 */
export const isStartedAssessmentHr = state => {
	const {
		assessmentHr: { isActive },
	} = state;

	return isActive;
};

/**
 *
 * @param state
 * @returns {*}
 */
export const selectAssessmentData = state => {
	const {
		assessmentQuestions: { data },
	} = state;

	return data;
};

/**
 *
 * @param state
 * @returns {*}
 */
export const selectAssessmentEmployee = state => {
	const {
		assessmentQuestions: { employee },
	} = state;

	return employee;
};

/**
 *
 * @param state
 * @returns {*}
 */
export const selectAssessmentStep = state => {
	const {
		assessmentQuestions: { data },
	} = state;

	if(!data) {
		return 1
	}

	return Number(data.step);
};

/**
 *
 * @param state
 * @returns {*}
 */
export const selectAssessmentIsLastStep = state => {
	const {
		assessmentQuestions: { data },
	} = state;

	if (!data) {
		return null;
	}

	const { isLast } = data;

	return isLast;
};

/**
 *
 * @param state
 * @returns {*}
 */
export const selectAssessmentLoading = state => {
	const {
		assessmentQuestions: { loading },
	} = state;

	return loading;
};

/**
 *
 * @param state
 * @returns {*}
 */
export const selectAssessmentError = state => {
	const {
		assessmentQuestions: { error },
	} = state;

	return error;
};

/**
 *
 * @param state
 * @returns {*}
 */
export const selectAssessmentValidationErrors = state => {
	const {
		assessmentQuestions: { validationErrors },
	} = state;

	return validationErrors;
};

/**
 *
 * @param state
 * @returns {*}
 */
export const selectAssessmentId = state => {
	const {
		assessmentQuestions: { assessment },
	} = state;

	return assessment;
};

/**
 *
 * @param state
 * @returns {*}
 */
export const selectAssessmentAnswers = state => {
	const {
		assessmentQuestions: { answers },
	} = state;

	return answers;
};

/**
 *
 * @param state
 */
export const selectAssessmentHrEvaluated = state => {
	return evaluated;
};

/**
 *
 * @param state
 */
export const getPopupParams = state => {
	const {
		popups: {
			data
		}
	} = state;

	return data
};
