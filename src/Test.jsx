import React from "react";
import PropTypes from "prop-types";
import css from "./Test.scss";
import Clock from "./_svg/Clock.svg";
import img from "./_images/1.jpeg";

Test.propTypes = {};

Test.defaultProps = {};

function Test() {
	return (
		<div className={css.index}>
			{"Test6"}

			<Clock />

			<img src={img} alt="" />
		</div>
	);
}

export default Test;
