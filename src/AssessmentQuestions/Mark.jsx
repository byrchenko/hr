import React from "react";
import PropTypes from "prop-types";
import css from "./Mark.scss";

/**
 *
 * @param question
 * @param item
 * @param selected
 * @param setMark
 * @returns {*}
 * @constructor
 */
const Mark = ({ question, item, selected, setMark }) => {
	const { value, description } = item;

	return (
		<label className={css.index}>
			<input
				className={css.input}
				type="radio"
				name={"mark" + question}
				checked={value === selected}
				onChange={() => setMark(value)}
			/>

			<div className={css.radio} />

			<span className={css.number}>{value}</span>

			<div className={css.tooltip}>
				<span className={css.text}>{description}</span>
			</div>
		</label>
	);
};

/**
 *
 */
Mark.propTypes = {
	setMark: PropTypes.func,
	question: PropTypes.number,
	item: PropTypes.object,
	selected: PropTypes.number,
};

export default Mark;
