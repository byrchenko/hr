import React from "react";
import PropTypes from "prop-types";
import css from "./Assessment.scss";
import TwoColumnLayout from "../_layout/TwoColumn";

class Assessment extends React.Component {

	render() {
		return (
			<TwoColumnLayout>
				<div className={css.index}>
					{"Assessment"}
				</div>
			</TwoColumnLayout>
		);
	}
}

export default Assessment;