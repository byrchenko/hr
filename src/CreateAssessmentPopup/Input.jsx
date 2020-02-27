import React from "react";
import PropTypes from "prop-types";
import css from "./Input.scss";
import SelectUserInput from "../SelectUserInput";

/**
 *
 * @param title
 * @param renderItem
 * @returns {*}
 * @constructor
 */
const Input = ({title, renderItem}) => {
	return (
		<div className={css.group}>
			<div className={css.groupTitle}>
				{title}
			</div>

			{renderItem()}
		</div>
	);
};

/**
 *
 */
Input.propTypes = {
	title: PropTypes.string,
	renderItem: PropTypes.func
};

export default Input;