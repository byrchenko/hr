import React from "react";
import PropTypes from "prop-types";
import css from "./Settings.scss";
import TwoColumnLayout from "../_layout/TwoColumn";

class Settings extends React.Component {

	render() {
		return (
			<TwoColumnLayout>
				<div className={css.index}>
					{"Settings"}
				</div>
			</TwoColumnLayout>
		);
	}
}

export default Settings;