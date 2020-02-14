import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import { connect } from "react-redux";
import Section from "./Section";
import Item from "./Item";
import { openPopup } from "../_actions";

import {
	setBlockFilter,
	setCompetenceFilter
} from "../_actions/settings";

import {
	getFilteredCompetences,
	getFilteredBlocks
} from "../_selectors/settings";

import {
	BLOCK_TYPE,
	COMPETENCE_TYPE,
	POSITION_TYPE
} from "./constants";

import {
	ADD_BLOCK_POPUP,
	ADD_COMPETENCY_POPUP,
	ADD_POSITION_POPUP, EDIT_BLOCK_POPUP,
	EDIT_COMPETENCY_POPUP,
	EDIT_POSITION_POPUP,
} from "../Popuper/popups";

/**
 *
 */
class AssessmentSettings extends React.Component {

	/**
	 * Competence item in list
	 */
	renderCompetence() {
		const {editCompetency} = this.props;

		return item => {
			return (
				<Item
					key={item.id}
					item={item}
					edit={editCompetency}
					remove={() => null}
				/>
			)
		}
	}

	/**
	 * Block item in list
	 */
	renderBlock(filter) {
		const {filterCompetence, editBlock} = this.props;

		return item => {
			return (
				<Item
					key={item.id}
					item={item}
					edit={editBlock}
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
		const {filterBlock, editPosition} = this.props;

		return item => {
			return (
				<Item
					key={item.id}
					item={item}
					edit={editPosition}
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
			filterAllBlocks,
			addCompetency,
			addPosition,
			addBlock
		} = this.props;

		return (
			<div className={css.index}>
				<Section
					type={POSITION_TYPE}
					list={positions}
					renderItem={this.renderPosition(blocksFilter)}
					selectAll={filterAllBlocks}
					filter={blocksFilter}
					addItem={addPosition}
				/>

				<Section
					type={BLOCK_TYPE}
					list={blocks}
					renderItem={this.renderBlock(competencesFilter)}
					selectAll={filterAllCompetences}
					filter={competencesFilter}
					addItem={addBlock}
				/>

				<Section
					type={COMPETENCE_TYPE}
					list={competences}
					renderItem={this.renderCompetence()}
					addItem={addCompetency}
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
	addCompetency: PropTypes.func,
	editCompetency: PropTypes.func,
	addPosition: PropTypes.func,
	editPosition: PropTypes.func,
	addBlock: PropTypes.func,
	editBlock: PropTypes.func,
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
		addCompetency: () => dispatch(openPopup(ADD_COMPETENCY_POPUP)),
		editCompetency: item => dispatch(openPopup(EDIT_COMPETENCY_POPUP, item)),
		addPosition: () => dispatch(openPopup(ADD_POSITION_POPUP)),
		editPosition: item => dispatch(openPopup(EDIT_POSITION_POPUP, item)),
		addBlock: () => dispatch(openPopup(ADD_BLOCK_POPUP)),
		editBlock: item => dispatch(openPopup(EDIT_BLOCK_POPUP, item)),
	}
};

export default connect(mapState, mapDispatch)(AssessmentSettings);