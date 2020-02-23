import React from "react";
import PropTypes from "prop-types";
import css from "./Next.scss";
import text from "./locale/ru";
import Arrow from "../_svg/next.svg";

const Next = ({ isLastStep, validate, goNext, finishAssessment }) => {
	if (isLastStep) {
		return (
			<button
				type="button"
				className={css.index}
				onClick={() => validate(finishAssessment)}
			>
				{text.nextLast}
			</button>
		);
	}

	return (
		<button
			type="button"
			className={css.index}
			onClick={() => validate(goNext)}
		>
			{text.next}

			<Arrow
				width={7}
				height={11}
				className={css.icon}
			/>
		</button>
	);
};

/**
 *
 */
Next.propTypes = {
	isLastStep: PropTypes.bool,
	validate: PropTypes.func,
	goNext: PropTypes.func,
	finishAssessment: PropTypes.func,
};

export default Next;
