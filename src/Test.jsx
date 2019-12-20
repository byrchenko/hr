import React from "react";
import PropTypes from "prop-types";
import css from "./Test.scss";
import Clock from "./_svg/Clock.svg";

const Test = () => {
	return (
		<div className={css.index}>
			{"Test"}

			<Clock />
		</div>
	);
};

Test.propTypes = {};

Test.defaultProps = {};

export default Test;
