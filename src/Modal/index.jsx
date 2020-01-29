import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import text from "./locale/ru/text";
import Close from "../_svg/close.svg";
import { goBack } from "connected-react-router";
import { connect } from "react-redux";

const Modal = ({
	title,
	submitText,
	submitAction,
	goBack,
	children,
}) => {
	/**
	 *
	 */
	function closeModal() {
		goBack();
	}

	return (
		<div className={css.overlay}>
			<div className={css.modal}>
				<div className={css.header}>
					<h3 className={css.title}>{title}</h3>

					<button
						className={css.close}
						onClick={closeModal}
					>
						<Close height={9} width={9} />
					</button>
				</div>

				<div className={css.content}>
					{children}

					<div className={css.buttons}>
						<button
							className={css.submit}
							onClick={submitAction}
						>
							{submitText}
						</button>

						<button
							className={css.cancel}
							onClick={closeModal}
						>
							{text.close}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

/**
 *
 */
Modal.propTypes = {
	title: PropTypes.string,
	submitText: PropTypes.string,
	submitAction: PropTypes.func,
	goBack: PropTypes.func,
};

/**
 *
 */
Modal.defaultProps = {
	title: "Modal title",
	submitText: "Submit",
};

export default connect(null, { goBack })(Modal);
