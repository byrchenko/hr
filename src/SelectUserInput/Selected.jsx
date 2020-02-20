import React from "react";
import PropTypes from "prop-types";
import css from "./Selected.scss";

const Selected = ({name, lastname, remove, id}) => {
	return (
		<div className={css.index}>
			<span className={css.name}>
				{name + ' ' + lastname}
			</span>

			<div
				className={css.remove}
				onClick={() => remove(id)}
			>
				x
			</div>
		</div>
	);
};

/**
 *
 */
Selected.propTypes = {
	name: PropTypes.string,
	lastname: PropTypes.string,
	remove: PropTypes.func,
	id: PropTypes.number
};

export default Selected;