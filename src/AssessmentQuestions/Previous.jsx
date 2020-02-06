import React from "react";
import PropTypes from "prop-types";
import css from "./Previous.scss";
import text from "./locale/ru";
import Arrow from "../_svg/prev.svg";

const Previous = ({ isFirstStep, goPrev }) => {
	if (isFirstStep) {
		return null;
	}

	return (
		<button type="button" className={css.index} onClick={goPrev}>
			{text.prev}

			<Arrow width={7} height={11} className={css.icon} />
		</button>
	);
};

/**
 *
 */
Previous.propTypes = {
	isFirstStep: PropTypes.bool,
	goPrev: PropTypes.func,
};

export default Previous;
