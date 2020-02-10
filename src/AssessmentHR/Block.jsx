import React from "react";
import PropTypes from "prop-types";
import css from "./Block.scss";

class Block extends React.Component {
	/**
	 *
	 */
	renderTitle() {
		const {
			item: { title },
		} = this.props;

		return <div className={css.item}>{title}</div>;
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const {
			item: { questions },
			renderQuestions,
		} = this.props;

		return (
			<div className={css.index}>
				<div className={css.title}>
					{this.renderTitle()}

					{this.renderTitle()}

					{this.renderTitle()}
				</div>

				{renderQuestions(questions)}
			</div>
		);
	}
}

Block.propTypes = {
	renderQuestions: PropTypes.func,
	item: PropTypes.object,
};

export default Block;
