import React from "react";
import PropTypes from "prop-types";
import css from "./TwoColumn.scss";
import Navigation from "../Navigation";
import PageTitle from "../PageTitle";
import Sidebar from "../Sidebar";
import { connect } from "react-redux";
import Popuper from "../Popuper";

const TwoColumn = ({ children, loading, error, data }) => {
	/**
	 *
	 * @returns {*}
	 */
	function renderContent() {
		if (loading) {
			return <div className={css.loading}>Loading..</div>;
		}

		if (error) {
			return (
				<div className={css.error}>
					Error.. Try again later
				</div>
			);
		}

		if (data === null || data === undefined) {
			return (
				<div className={css.oops}>
					Oops.. Something went wrong!
				</div>
			);
		}

		return (
			<div className={css.wrapper}>
				<div className={css.content}>{children}</div>

				<aside className={css.sidebar}>
					<Sidebar />
				</aside>
			</div>
		);
	}

	return (
		<div className={css.index}>
			<Navigation />

			<PageTitle />

			<Popuper />

			{renderContent()}
		</div>
	);
};

/**
 *
 * @param state
 */
const mapState = state => {
	const {
		employee: { data, error, loading },
	} = state;

	return {
		data,
		loading,
		error,
	};
};

export default connect(mapState)(TwoColumn);
