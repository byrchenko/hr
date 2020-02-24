import React from "react";
import PropTypes from "prop-types";
import css from "./Section.scss";
import Plus from "../_svg/plus.svg";

import {
	BLOCK_TYPE,
	COMPETENCE_TYPE,
	POSITION_TYPE,
} from "./constants";

/**
 * Config for different types
 */
const types = {
	[POSITION_TYPE]: {
		class: css.position,
		title: "Должность",
	},

	[BLOCK_TYPE]: {
		class: css.block,
		title: "Блок",
	},

	[COMPETENCE_TYPE]: {
		class: css.competence,
		title: "Компетенции",
	},
};

/**
 * Section component
 */
class Section extends React.Component {

	/**
	 * Item list
	 */
	renderList() {
		const { list, renderItem } = this.props;

		if (!list) {
			return (
				<div className={css.empty}>
					{"Nothing found.."}
				</div>
			);
		}

		return list.map(renderItem);
	}

	/**
	 * Button for displaying all children from list
	 */
	renderAllButton() {
		const { selectAll, filter } = this.props;

		if (
			selectAll === null
			|| selectAll === undefined
		) {
			return null;
		}

		return (
			<button
				className={filter === "all" ? css.selected : css.all}
				onClick={selectAll}
			>
				{"Все"}
			</button>
		);
	}

	/**
	 *
	 */
	renderAddButton() {
		const { isButton, addItem } = this.props;

		if (isButton === "all") {
			return null;
		}

		return (
			<button
				className={css.add}
				onClick={addItem}
			>
				<Plus
					height={8}
					width={8}
				/>
			</button>
		)
	}

	/**
	 * Components render
	 */
	render() {
		const { type, addItem, isButton } = this.props;
		const {
			title,
			class: wrapperClass,
		} = types[type];

		return (
			<div className={wrapperClass}>
				<div className={css.header}>
					<span className={css.title}>
						{title}
					</span>

					{this.renderAddButton()}
				</div>

				<div className={css.content}>
					{this.renderAllButton()}

					{this.renderList()}
				</div>
			</div>
		);
	}
}

/**
 * Prop types
 */
Section.propTypes = {
	type: PropTypes.string,
	list: PropTypes.array,
	renderItem: PropTypes.func,
	selectAll: PropTypes.func,
	addItem: PropTypes.func,
	filter: PropTypes.any,
};

export default Section;