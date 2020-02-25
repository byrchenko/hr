import React from "react";
import PropTypes from "prop-types";
import css from "./Item.scss";

const Item = ({item}) => {

	return (
		<div className={css.index}>
			<div className={css.cell}>
				{item.title}
			</div>

			<div className={css.cell}>
				{item.employees_count}
			</div>

			<div className={css.cell}>
				{item.startDate}
			</div>

			<div className={css.cell}>
				{item.endDate}
			</div>
		</div>
	);
};

/**
 *
 */
Item.propTypes = {
	item: PropTypes.object
};

export default Item;