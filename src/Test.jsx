import React from "react";
import PropTypes from "prop-types";
import css from "./Test.scss";
import Clock from "./_svg/Clock.svg";
import img from "./_images/1.jpeg";

const Test = () => {
	return (
		<div className={css.index}>
			{"Test"}

			<Clock />

			<img src={img} alt="" />
		</div>
	);
};

Test.propTypes = {};

Test.defaultProps = {};

export default Test;
