import React from "react";
import PropTypes from "prop-types";
import css from "./Home.scss";

class Home extends React.Component {

	render() {
		return (
			<div className={css.index}>
				{"Home"}
			</div>
		);
	}
}

export default Home;