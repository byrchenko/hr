import React from "react";
import PropTypes from "prop-types";
import css from "./Wrapper.scss";

const Wrapper = ({renderSelected, renderUsers, renderAdd}) => {

	return (
		<div className={css.index}>
			<div className={css.selected}>
				{renderSelected()}

				{renderAdd()}
			</div>

			{renderUsers()}
		</div>
	);
};

/**
 *
 */
Wrapper.propTypes = {
	renderSelected: PropTypes.func,
	renderUsers: PropTypes.func,
	renderAdd: PropTypes.func,
};

export default Wrapper;