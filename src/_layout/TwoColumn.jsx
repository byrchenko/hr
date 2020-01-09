import React from "react";
import PropTypes from "prop-types";
import css from "./TwoColumn.scss";
import Navigation from "../Navigation";
import PageTitle from "../PageTitle";
import Sidebar from "../Sidebar";

const TwoColumn = ({children}) => {

	return (
		<div className={css.index}>
			<Navigation />

			<PageTitle />

			<div className={css.wrapper}>
				<div className={css.content}>
					{children}
				</div>

				<aside className={css.sidebar}>
					<Sidebar />
				</aside>
			</div>
		</div>
	);
};

TwoColumn.propTypes = {};

TwoColumn.defaultProps = {};

export default TwoColumn;