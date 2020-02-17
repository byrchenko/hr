import React from "react";
import PropTypes from "prop-types";
import css from "./Add.scss";
import Plus from "../_svg/plus.svg";

const Add = ({ startSearch },
) => {
	return (
		<div
			className={css.index}
			onClick={startSearch}
		>
			<Plus
				height={8}
				width={8}
				className={css.plus}
			/>

			{"Добавить оценивающего"}
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