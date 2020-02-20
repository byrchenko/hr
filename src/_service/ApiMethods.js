import { sendGet, sendPut } from "./RequestFactory";

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

