import React from "react";
import PropTypes from "prop-types";
import css from "./Close.scss";
import CloseIcon from "../_svg/close_popup.svg"

/**
 *
 * @param handleClose
 * @returns {*}
 * @constructor
 */
const Close = ({handleClose}) => {
	return (
		<div
			className={css.close}
			onClick={handleClose}
		>
			<CloseIcon
				width={36}
				height={36}
				fill={"#fff"}
			/>
		</div>
	);
};

/**
 *
 */
Close.propTypes = {
	handleClose: PropTypes.func,
};

export default Close;