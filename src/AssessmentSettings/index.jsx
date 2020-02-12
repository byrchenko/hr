import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import { connect } from "react-redux";
import Section from "./Section";
import {
	getFilteredCompetences,
	getFilteredBlocks
} from "../_selectors/settings";

import {
	BLOCK_TYPE,
	COMPETENCE_TYPE,
	POSITION_TYPE
} from "./constants";
import Item from "./Item";
import { setBlockFilter, setCompetenceFilter } from "../_actions/settings";

/**
 *
 */
class AssessmentSettings extends React.Component {

	/**
	 * Competence item in list
	 */
	renderCompetence() {
		return item => {
			return (
				<Item
					item={item}
					edit={() => null}
					remove={() => null}
				/>
			)
		}
	}

	/**
	 * Block item in list
	 */
	renderBlock(filter) {
		const {filterCompetence} = this.props;

		return item => {
			return (
				<Item
					item={item}
					edit={() => null}
					remove={() => null}
					select={filterCompetence}
					filter={filter}
				/>
			)
		}
	}

	/**
	 * Position item in list
	 */
	renderPosition(filter) {
		const {filterBlock} = this.props;

		return item => {
			return (
				<Item
					item={item}
					edit={() => null}
					remove={() => null}
					select={filterBlock}
					filter={filter}
				/>
			)
		}
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const {
			blocks,
			competences,
			positions,
			blocksFilter,
			competencesFilter,
			filterAllCompetences,
			filterAllBlocks
		} = this.props;

		return (
			<div className={css.index}>
				<Section
					type={POSITION_TYPE}
					list={positions}
					renderItem={this.renderPosition(blocksFilter)}
					selectAll={filterAllBlocks}
					filter={blocksFilter}
				/>

				<Section
					type={BLOCK_TYPE}
					list={blocks}
					renderItem={this.renderBlock(competencesFilter)}
					selectAll={filterAllCompetences}
					filter={competencesFilter}
				/>

				<Section
					type={COMPETENCE_TYPE}
					list={competences}
					renderItem={this.renderCompetence()}
				/>
			</div>
		);
	}
}

/**
 *
 */
AssessmentSettings.propTypes = {
	blocks: PropTypes.array,
	competences: PropTypes.array,
	positions: PropTypes.array,
	blocksFilter: PropTypes.any,
	competencesFilter: PropTypes.any,
	filterAllCompetences: PropTypes.func,
	filterAllBlocks: PropTypes.func,
	filterBlock: PropTypes.func,
	filterCompetence: PropTypes.func,
};

/**
 * Selectors
 */
const mapState = state => {
	const {
		settings: {
			data,
			blocksFilter,
			competencesFilter
		}
	} = state;

	return {
		blocks: getFilteredBlocks(state),
		competences: getFilteredCompetences(state),
		positions: data ? data.positions : null,
		blocksFilter,
		competencesFilter
	}
};

/**
 * Dispatchers
 */
const mapDispatch = dispatch => {
	return {
		filterAllBlocks: () => dispatch(setBlockFilter('all')),
		filterAllCompetences: () => dispatch(setCompetenceFilter('all')),
		filterBlock: position => dispatch(setBlockFilter(position)),
		filterCompetence: block => dispatch(setCompetenceFilter(block)),
	}
};

export default connect(mapState, mapDispatch)(AssessmentSettings);