import React from "react";
import PropTypes from "prop-types";
import css from "./Item.scss";

const Item = ({selectUser, item}) => {

	return (
		<div
			className={css.index}
			onClick={() => selectUser(item)}
		>
			{`${item.name} ${item.last_name}`}
		</div>
	);
};

/**
 *
 */
Item.propTypes = {
	selectUser: PropTypes.func,
	item: PropTypes.object
};

export default Item;