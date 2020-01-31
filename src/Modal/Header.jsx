import React from "react";
import PropTypes from "prop-types";
import css from "./Header.scss";
import Close from "../_svg/close.svg";

const Header = ({ title, close }) => {
	return (
		<div className={css.header}>
			<h3 className={css.title}>{title}</h3>

			<button className={css.close} onClick={close}>
				<Close height={9} width={9} />
			</button>
		</div>
	);
};

/**
 *
 */
Header.propTypes = {
	title: PropTypes.string,
	close: PropTypes.func,
};

export default Header;
