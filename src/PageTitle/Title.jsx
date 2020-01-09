import React from "react";
import PropTypes from "prop-types";
import css from "./Title.scss";
import text from "./locale/ru";

const Title = props => {

	return (
		<h2 className={css.index}>
			{text.title}
		</h2>
	);
};

Title.propTypes = {};

Title.defaultProps = {};

export default Title;