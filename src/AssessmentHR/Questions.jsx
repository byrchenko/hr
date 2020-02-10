import React from "react";
import PropTypes from "prop-types";
import css from "./Questions.scss";

class Questions extends React.Component {
	/**
	 *
	 */
	renderQuestions() {
		const { list, renderQuestion } = this.props;

		return list.map(renderQuestion);
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<div className={css.index}>{this.renderQuestions()}</div>
		);
	}
}

Questions.propTypes = {
	list: PropTypes.array,
	renderQuestion: PropTypes.func,
};

export default Questions;
