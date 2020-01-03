import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import css from "./Test.scss";
import Clock from "./_svg/Clock.svg";
import img from "./_images/1.jpeg";

Test.propTypes = {};

Test.defaultProps = {};

function Test() {

	const formData = new FormData();

	formData.append('hello', "world");

	fetch('/hr/?ID=11', {
		method: 'PATCH',
		credentials: 'include',
		// body: formData,
	})
		.then(result => result.text());


	return (
		<div className={css.index}>
			{"Test21"}

			<Clock />

			<img src={img} alt="" />
		</div>
	);
}

export default Test;
