import React from "react";
import PropTypes from "prop-types";
import css from "./Content.scss";

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
 * @param loading
 * @returns {*}
 * @constructor
 */
const Content = (
	{
		content,
		loading,
	},
) => {
	return (
		<div className={css.content}>
			{renderPreloader(loading)}

			<div className={css.children}>
				{content}
			</div>
		</div>
	);
};

/**
 *
 */
Content.propTypes = {
	content: PropTypes.any,
	type: PropTypes.string,
	handleSubmit: PropTypes.func,
	close: PropTypes.func,
	loading: PropTypes.bool,
};

export default Content;
