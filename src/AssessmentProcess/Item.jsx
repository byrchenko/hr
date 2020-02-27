import React from "react";
import PropTypes from "prop-types";
import css from "./Item.scss";
import EditIcon from "../_svg/edit.svg";
import moment from "moment";

/**
 *
 * @param item
 * @param edit
 * @returns {*}
 * @constructor
 */
const Item = ({ item, edit }) => {
	return (
		<div className={css.index}>
			<div className={css.cell}>
				{item.title}
			</div>

			<div className={css.cell}>
				{item.employees_count}
			</div>

			<div className={css.cell}>
				{moment(item.startDate * 1000).format("DD.MM.YYYY")}
			</div>

			<div className={css.cell}>
				{moment(item.endDate * 1000).format("DD.MM.YYYY")}
			</div>

			<div className={css.cell}>
				<EditIcon
					className={css.icon}
					onClick={edit(item)}
					height={12}
					width={12}
					fill={"#333"}
				/>
			</div>
		</div>
	);
};

/**
 *
 */
Item.propTypes = {
	item: PropTypes.object,
	edit: PropTypes.func,
};

export default Item;