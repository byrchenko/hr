import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import { closePopup } from "../_actions";
import { connect } from "react-redux";

/**
 *
 * @param handleSubmit
 * @param close
 * @param type
 * @returns {*}
 * @constructor
 */
const ModalButtons = ({submit, close, type}) => {
	return (
		<div className={css.buttons}>
			<button
				className={css.submit}
				onClick={submit}
			>
				{"Добавить"}
			</button>

			<button
				className={css.cancel}
				onClick={() => close(type)}
			>
				{"Закрыть"}
			</button>
		</div>
	);
};

/**
 *
 */
ModalButtons.propTypes = {
	submit: PropTypes.func,
	close: PropTypes.func,
	type: PropTypes.string,
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

export default connect(null, mapDispatch)(ModalButtons);