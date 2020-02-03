import React from "react";
import PropTypes from "prop-types";
import css from "./Content.scss";
import text from "./locale/ru/text";
import { closePopup } from "../_actions";
import { connect } from "react-redux";

/**
 *
 * @returns {null|*}
 */
function renderPreloader(loading) {
	if (!loading) {
		return null;
	}

	return <div className={css.loading}>Loading...</div>;
}

/**
 *
 * @param content
 * @param handleSubmit
 * @param submitText
 * @param loading
 * @returns {*}
 * @constructor
 */
const Content = ({ content, handleSubmit, close, loading, type }) => {
	return (
		<div className={css.content}>
			{renderPreloader(loading)}

			<div className={css.children}>{content}</div>

			<div className={css.buttons}>
				<button className={css.submit} onClick={handleSubmit}>
					{text.submit}
				</button>

				<button
					className={css.cancel}
					onClick={() => close(type)}
				>
					{text.close}
				</button>
			</div>
		</div>
	);
};

/**
 *
 */
Content.propTypes = {
	type: PropTypes.string,
	handleSubmit: PropTypes.func,
	close: PropTypes.func,
	loading: PropTypes.bool,
};

/**
 *
 * @type {boolean}
 */
const mapDispatch = dispatch => {
	return {
		close: type => dispatch(closePopup(type)),
	};
};

export default connect(null, mapDispatch)(Content);
