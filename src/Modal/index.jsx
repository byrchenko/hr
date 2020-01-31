import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Appear from "../_transitions/Appear";
import Header from "./Header";
import Content from "./Content";

export const Modal = ({
	title,
	submitText,
	submitAction,
	children,
	loading,
	approved,
	push,
}) => {
	/**
	 *
	 */
	function closeModal() {
		if (loading) {
			return null;
		}

		push("./");
	}

	if (approved) {
		push("./");
	}

	return (
		<Appear keyValue="modal">
			<div className={css.overlay}>
				<div className={css.modal}>
					<Header title={title} close={closeModal} />

					<Content
						content={children}
						submitText={submitText}
						handleSubmit={submitAction}
						closeModal={closeModal}
						loading={loading}
						approved={approved}
					/>
				</div>
			</div>
		</Appear>
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
	loading: PropTypes.bool,
	isOn: PropTypes.bool,
	approved: PropTypes.bool,
};

/**
 *
 */
Modal.defaultProps = {
	title: "Modal title",
	submitText: "Submit",
	loading: false,
	approved: true,
};

export default connect(null, { push })(Modal);
