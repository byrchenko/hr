import React from "react";
import PropTypes from "prop-types";
import css from "./Wrapper.scss";

const Wrapper = ({children}) => {
	return (
		<div className={css.index}>
			{children}
		</div>
	);
};

Wrapper.propTypes = {};

Wrapper.defaultProps = {};

export default Wrapper;