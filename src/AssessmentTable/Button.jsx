import React from "react";
import PropTypes from "prop-types";
import css from "./Button.scss";
import Complete from "../_svg/complete.svg";
import Wait from "../_svg/wait.svg";

const Button = ({type}) => {
	const config = {
		complete: () => (
			<div className={css.complete}>
				<Complete
					width={20}
					height={20}
				/>
			</div>
		),
		waiting: () => (
			<div className={css.waiting}>
				<Wait
					width={14}
					height={14}
				/>
			</div>
		),
		estimate: () => (
			<div className={css.estimate}>
				Оценить
			</div>
		),
		meeting: () => (
			<div className={css.meeting}>
				Провести встречу
			</div>
		),
	};

	return config[type]();
};

Button.propTypes = {};

Button.defaultProps = {};

export default Button;