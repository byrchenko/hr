import React from "react";
import PropTypes from "prop-types";
import css from "./Processing.scss";
import TwoColumnLayout from "../_layout/TwoColumn";

class Processing extends React.Component {

	render() {
		return (
			<TwoColumnLayout>
				<div className={css.index}>
					{"Processing"}
				</div>
			</TwoColumnLayout>
		);
	}
}

export default Processing;