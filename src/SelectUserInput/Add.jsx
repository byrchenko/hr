import React from "react";
import PropTypes from "prop-types";
import css from "./Add.scss";

const Add = ({ startSearch },
) => {
	return (
		<div
			className={css.index}
			onClick={startSearch}
		>
			{"+ Добавить оценивающего"}
		</div>
	);
};

/**
 *
 */
Add.propTypes = {
	startSearch: PropTypes.func,
};

export default Add;