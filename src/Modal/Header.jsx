import React from "react";
import PropTypes from "prop-types";
import css from "./Header.scss";
import Close from "../_svg/close.svg";
import { closePopup } from "../_actions";
import { connect } from "react-redux";

const Header = ({ title, close, type }) => {
	return (
		<div className={css.header}>
			<h3 className={css.title}>{title}</h3>

			<button className={css.close} onClick={() => close(type)}>
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
	type: PropTypes.string,
};

/**
 *
 * @param dispatch
 * @returns {{close: (function(*=): {payload: *, type: string})}}
 */
const mapDispatch = dispatch => {
	return {
		close: type => dispatch(closePopup(type)),
	};
};

export default connect(null, mapDispatch)(Header);
