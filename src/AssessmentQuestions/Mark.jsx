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
	const [isChecked, setIsChecked] = React.useState(
		item === selected,
	);

	return (
		<label
			className={css.index}
			onClick={() => setIsChecked(!isChecked)}
		>
			<input
				className={css.input}
				type="radio"
				name={"mark" + question}
				onChange={() => setMark(item)}
			/>

			<div className={css.radio} />

			<span className={css.number}>{item}</span>
		</label>
	);
};

/**
 *
 */
Mark.propTypes = {
	setMark: PropTypes.func,
	question: PropTypes.number,
	item: PropTypes.number,
	selected: PropTypes.number,
};

export default Mark;
