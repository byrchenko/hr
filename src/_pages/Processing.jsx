import React from "react";
import PropTypes from "prop-types";
import css from "./Processing.scss";
import AssessmentProcess from "../AssessmentProcess"

class Processing extends React.Component {

	render() {
		return (
			<div className={css.index}>
				<AssessmentProcess />
			</div>
		);
	}
}

export default Processing;