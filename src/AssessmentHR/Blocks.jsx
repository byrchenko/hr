import React from "react";
import PropTypes from "prop-types";
import css from "./Blocks.scss";

class Blocks extends React.Component {
	/**
	 *
	 * @returns {null|*}
	 */
	renderBlocks() {
		const { list, renderBlock } = this.props;

		if (list === null || list === undefined) {
			return null;
		}

		return list.map(renderBlock);
	}

	render() {
		return <div className={css.index}>{this.renderBlocks()}</div>;
	}
}

Blocks.propTypes = {
	list: PropTypes.array,
	renderBlock: PropTypes.func,
};

export default Blocks;
