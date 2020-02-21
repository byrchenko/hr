import { sendDelete, sendGet, sendPost, sendPut } from "./RequestFactory";

/**
 * API url constant
 */
const API_URL = "https://portal.veloplaneta.com.ua/hr/api/"
	|| process.env.API_URL;

/**
 *
 * @param userId
 */
export function fetchCurrentUser(userId) {
	return sendGet(API_URL + "employees/" + userId);
}

/**
 *
 * @param userId
 */
export function fetchAssessmentList(userId) {
	return sendGet(
		API_URL
		+ "employees/"
		+ userId
		+ "/assessments",
	);
}

/**
 *
 * @param userId
 */
export function fetchCompanyStructure(userId) {
	return sendGet(
		API_URL
		+ "employees/"
		+ userId
		+ "/company",
	);
}

/**
 *
 * @param employee
 * @param position
 */
export function changeUserPosition(employee, position) {
	return sendPut(
		API_URL
		+ "employees/"
		+ employee,
		{
			positionId: position,
		},
	);
}

/**
 *
 * @param assessment
 * @param questions
 */
export function sendAnswers(assessment, questions) {
	return sendPut(
		API_URL
		+ "assessments/questions/"
		+ assessment,
		{ questions },
	);
}

/**
 *
 * @param assessmentId
 * @param userId
 * @param step
 * @returns {Promise<Response>}
 */
export function fetchQuestions(assessmentId, userId, step) {
	return sendGet(
		API_URL
		+ "assessments/questions/"
		+ assessmentId,
		{
			employeeId: userId,
			step: step + 1,
		},
	);
}

/**
 *
 */
export function fetchSettings() {
	return sendGet(API_URL + "settings");
}

/**
 *
 */
export function fetchPositions() {
	return sendGet(API_URL + "positions");
}

/**
 *
 * @param assessmentId
 * @param userId
 */
export function fetchAnswers(assessmentId, userId) {
	return sendGet(
		API_URL
		+ "assessments/questions/"
		+ assessmentId
		+ "/hr",
		{
			employeeId: userId,
		},
	);
}

/**
 *
 * @param title
 * @param date
 * @param executiveUserId
 * @param responsibleId
 * @returns {Promise<Response>}
 */
export function sendTasks(title, date, executiveUserId, responsibleId) {
	return sendPost(API_URL + "tasks", {
		title,
		date,
		executiveUserId,
		responsibleId,
	});
}

/**
 * Add position
 *
 * @param title
 * @returns {Promise<Response>}
 */
export function addPosition(title) {
	return sendPost(`${API_URL}positions`, {
		title,
	});
}

/**
 * Edit position
 *
 * @param id
 * @param title
 */
export function editPosition(id, title) {
	return sendPut(`${API_URL}positions/${id}`, {
		title,
	});
}

/**
 * Delete position
 *
 * @param id
 * @returns {Promise<Response>}
 */
export function deletePosition(id) {
	return sendDelete(`${API_URL}positions/${id}`);
}

/**
 * Add block of competences
 *
 * @param title
 * @param description
 * @param positionId
 * @returns {Promise<Response>}
 */
export function addBlock(title, description, positionId) {
	return sendPost(`${API_URL}competences/blocks`, {
		title,
		description,
		positionId,
	});
}

/**
 * Edit block of competences
 *
 * @param id
 * @param title
 * @param description
 */
export function editBlock(id, title, description) {
	return sendPut(`${API_URL}competences/blocks/${id}`, {
		title,
		description,
	});
}

/**
 * Delete block of competences
 *
 * @param id
 * @returns {Promise<Response>}
 */
export function deleteBlock(id) {
	return sendDelete(`${API_URL}competences/blocks/${id}`);
}

/**
 * Add block of competences
 *
 * @param title
 * @param description
 * @param competenceBlockId
 * @returns {Promise<Response>}
 */
export function addCompetence(title, description, competenceBlockId) {
	return sendPost(`${API_URL}competences`, {
		title,
		description,
		competenceBlockId,
	});
}

/**
 * Edit block of competences
 *
 * @param id
 * @param title
 * @param description
 */
export function editCompetence(id, title, description) {
	return sendPut(`${API_URL}competences/${id}`, {
		title,
		description,
	});
}

/**
 * Delete block of competences
 *
 * @param id
 * @returns {Promise<Response>}
 */
export function deleteCompetence(id) {
	return sendDelete(`${API_URL}competences/${id}`);
}

/**
 * Fetch assessments process data
 */
export const fetchAssessmentsProcess = () => {
	return sendGet(`${API_URL}assessments`);
};

/**
 * Add new assessment
 */
export const addAssessment = (
	title,
	startDate,
	endDate,
	employees,
	evaluatorId,
) => {
	console.log(startDate, endDate)
	return sendPost(`${API_URL}assessments`, {
		title,
		startDate,
		endDate,
		employees,
		evaluatorId
	});
};

/**
 * Edit assessment
 *
 * @param id
 * @param title
 * @param startDate
 * @param endDate
 * @param employees
 * @param evaluatorId
 * @returns {Promise<Response>}
 */
export const editAssessment = (
	id,
	title,
	startDate,
	endDate,
	employees,
	evaluatorId,
) => {
	return sendPut(`${API_URL}assessments/${id}`, {
		title,
		startDate,
		endDate,
		employees,
		evaluatorId
	});
};

