import { employee, hr, supervisor } from "./employee";

export default {
	blocks: [createBlock(0), createBlock(1)],
	evaluated: employee,
	evaluator: supervisor,
	finalizer: hr,
};

/**
 *
 * @param id
 * @returns {{questions: [], id: *, title: string}}
 */
function createBlock(id) {
	return {
		id,
		title: "Block " + id,
		questions: [
			createQuestion(1),
			createQuestion(2),
			createQuestion(3),
		],
	};
}

/**
 *
 * @param id
 * @returns {{description: string, comment: string, id: *, title: string, mark: number}}
 */
function createQuestion(id) {
	return {
		id,
		title: "Question " + id,
		description: "Question description",
		hr: {
			mark: 3,
			comment: "Some comment here",
		},
		supervisor: {
			mark: 3,
			comment: "Some comment here",
		},
		employee: {
			mark: 3,
			comment: "Some comment here",
		},
	};
}
