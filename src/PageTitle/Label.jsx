import React from "react";
import PropTypes from "prop-types";
import css from "./Label.scss";

const Label = ({title}) => {

	return (
		<div className={css.index}>
			{title}
		</div>
	);
};

Label.propTypes = {};

Label.defaultProps = {};

export default Label;