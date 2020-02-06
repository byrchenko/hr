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
