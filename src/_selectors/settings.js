import { createSelector } from "reselect";

/**
 *
 * @param state
 * @returns {*}
 */
const getBlocksFilter = state => {
	return state.settings.blocksFilter;
};

/**
 *
 * @param state
 * @returns {null}
 */
const getBlocks = state => {
	if (!state.settings.data) {
		return null
	}

	return state.settings.data.blocks;
};

/**
 *
 * @param state
 * @returns {*}
 */
const getCompetencesFilter = state => {
	return state.settings.competencesFilter;
};

/**
 *
 * @param state
 * @returns {null}
 */
const getCompetences = state => {
	if (!state.settings.data) {
		return null
	}

	return state.settings.data.competences;
};

/**
 *
 */
export const getFilteredBlocks = createSelector(
	[getBlocksFilter, getBlocks],
	(filter, blocks) => {
		if (filter === 'all') {
			return blocks;
		}

		return blocks.filter(item => {
			return item.position === filter
		})
	}
);

/**
 *
 */
export const getFilteredCompetences = createSelector(
	[getCompetencesFilter, getCompetences, getFilteredBlocks],
	(filter, competences, visibleBlocks) => {
		if (filter === 'all') {
			return competences.filter(item => {
				return visibleBlocks.find(el => {
					return item.block === el.id
				})
			})
		}

		return competences.filter(item => {
			return item.block === filter
		})
	}
);

