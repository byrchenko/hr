import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import Header from "./Header";
import Content from "./Content";

export const Modal = ({
	title,
	onSubmit,
	children,
	loading,
	type,
}) => {
	return (
		<div className={css.overlay}>
			<div className={css.modal}>
				<Header title={title} type={type} />

				<Content
					type={type}
					content={children}
					handleSubmit={onSubmit}
					loading={loading}
				/>
			</div>
		</div>
	);
};

/**
 *
 */
Modal.propTypes = {
	type: PropTypes.string,
	title: PropTypes.string,
	onSubmit: PropTypes.func,
	loading: PropTypes.bool,
};

/**
 *
 */
Modal.defaultProps = {
	title: "Modal title",
	loading: false,
	approved: true,
};

export default Modal;
