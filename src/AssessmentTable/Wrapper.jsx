import React from "react";
import PropTypes from "prop-types";
import css from "./Wrapper.scss";
import User from "../_svg/big_user.svg";

const Wrapper = ({children, list}) => {

	if(!list) {
		return (
			<div className={css.empty}>
				<User
					width={65}
					height={87}
				/>

				<h3 className={css.text}>
					Сотрудники ожидающие проверки отсутствуют
				</h3>
			</div>
		)
	}

	return (
		<div className={css.index}>
			{children}
		</div>
	);
};

Wrapper.propTypes = {};

Wrapper.defaultProps = {};

export default Wrapper;