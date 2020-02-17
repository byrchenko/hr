import React from "react";
import PropTypes from "prop-types";
import css from "./Item.scss";

const Item = ({selectUser, item}) => {
	const fullName = `${item.name} ${item.last_name}`;

	return (
		<div
			className={css.index}
			onClick={() => selectUser(item)}
		>
			<div className={css.picture}>
				<img src={item.image} alt={fullName} />
			</div>

			<div className={css.name}>
				{fullName}
			</div>
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