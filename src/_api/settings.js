export default {
	positions: [
		createPosition(0),
		createPosition(1),
	],
	blocks: [
		createBlock(0, 0),
		createBlock(1, 0),
		createBlock(2, 1),
		createBlock(3, 1),
	],
	competences: [
		createCompetence(1, 0),
		createCompetence(2, 0),
		createCompetence(3, 1),
		createCompetence(4, 1),
		createCompetence(5, 2),
		createCompetence(6, 2),
		createCompetence(7, 3),
		createCompetence(8, 3),
	],
};

/**
 *
 * @param id
 * @returns {{id: *, title: string}}
 */
function createPosition(id) {
	return {
		id,
		title: "Position " + id,
	};
}

/**
 *
 * @param id
 * @param position
 * @returns {{description: string, id: *, position: *, title: string}}
 */
function createBlock(id, position) {
	return {
		id,
		title: "Block " + position + id,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		position,
	};
}

/**
 *
 * @param id
 * @param block
 * @returns {{description: string, block: *, id: *, title: string}}
 */
function createCompetence(id, block) {
	return {
		id,
		title: "Competence " + block + id,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		block,
	};

}