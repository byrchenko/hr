import React from "react";
import PropTypes from "prop-types";
import css from "./Header.scss";
import text from "./locale/ru";

const Header = props => {
	return (
		<div className={css.index}>
			<p className={css.text}>{text.header}</p>
		</div>
	);
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
