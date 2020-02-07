/**
 *
 */
export default {
	id: 0,
	title: "Sales",
	questions: [
		buildQuestion(0),
		buildQuestion(1),
		buildQuestion(2),
		buildQuestion(3),
	],
	position: 1,
	isLast: false,
};

/**
 *
 * @type {{isLast: boolean, questions: [{description: string, comment: null, id: *, title: string, mark: null}, {description: string, comment: null, id: *, title: string, mark: null}, {description: string, comment: null, id: *, title: string, mark: null}, {description: string, comment: null, id: *, title: string, mark: null}], id: number, position: number, title: string}}
 */
export const completedQuestions = {
	id: 0,
	title: "Sales",
	questions: [
		buildQuestionComplete(0),
		buildQuestionComplete(1),
		buildQuestionComplete(2),
		buildQuestionComplete(3),
	],
	position: 1,
	isLast: false,
};

/**
 *
 * @type {{isLast: boolean, questions: [{description: string, comment: null, id: *, title: string, mark: null}, {description: string, comment: null, id: *, title: string, mark: null}, {description: string, comment: null, id: *, title: string, mark: null}, {description: string, comment: null, id: *, title: string, mark: null}], id: number, position: number, title: string}}
 */
export const lastCompletedQuestions = {
	id: 0,
	title: "Sales",
	questions: [
		buildQuestionComplete(0),
		buildQuestionComplete(1),
		buildQuestionComplete(2),
		buildQuestionComplete(3),
	],
	position: 1,
	isLast: true,
};

/**
 *
 * @param id
 * @returns {{description: string, comment: null, id: *, title: string, mark: null}}
 */
function buildQuestion(id) {
	return {
		id,
		title: "Знание ассортимента",
		description:
			"Может описать позицию по предоставленному названию, указать ее применяемость и аналоги",
		mark: null,
		comment: null,
	};
}

/**
 *
 * @param id
 * @returns {{description: string, comment: null, id: *, title: string, mark: null}}
 */
function buildQuestionComplete(id) {
	return {
		id,
		title: "Знание ассортимента",
		description:
			"Может описать позицию по предоставленному названию, указать ее применяемость и аналоги",
		mark: 3,
		comment: null,
	};
}
