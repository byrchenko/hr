import React from "react";
import PropTypes from "prop-types";
import css from "./Next.scss";
import text from "./locale/ru";
import Arrow from "../_svg/next.svg";

const Next = ({ isLastStep, goNext }) => {
	if (isLastStep) {
		return (
			<button type="button" className={css.index}>
				{text.nextLast}
			</button>
		);
	}

	return (
		<button type="button" className={css.index} onClick={goNext}>
			{text.next}

			<Arrow width={7} height={11} className={css.icon} />
		</button>
	);
};

/**
 *
 */
Next.propTypes = {
	isLastStep: PropTypes.bool,
	goNext: PropTypes.func,
};

export default Next;
