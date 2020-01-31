import React from "react";
import PropTypes from "prop-types";
import css from "./Content.scss";
import text from "./locale/ru/text";

/**
 *
 * @param content
 * @param handleSubmit
 * @param submitText
 * @param closeModal
 * @param loading
 * @param approved
 * @returns {*}
 * @constructor
 */
const Content = ({
	content,
	handleSubmit,
	submitText,
	closeModal,
	loading,
	approved,
}) => {
	/**
	 *
	 * @returns {null|*}
	 */
	function renderPreloader() {
		if (!loading) {
			return null;
		}

		return <div className={css.loading}>Loading...</div>;
	}

	/**
	 *
	 */
	function renderSubmit() {
		if (!approved) {
			return null;
		}

		return <div className={css.empty} />;
	}

	return (
		<div className={css.content}>
			{renderPreloader() || renderSubmit()}

			<div className={css.children}>{content}</div>

			<div className={css.buttons}>
				<button className={css.submit} onClick={handleSubmit}>
					{submitText}
				</button>

				<button className={css.cancel} onClick={closeModal}>
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
	handleSubmit: PropTypes.func,
	submitText: PropTypes.string,
	closeModal: PropTypes.func,
	loading: PropTypes.bool,
	approved: PropTypes.bool,
};

export default Content;
