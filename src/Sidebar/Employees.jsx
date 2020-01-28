import React from "react";
import PropTypes from "prop-types";
import css from "./Employees.scss";
import PermissionController from "../_permissions/Controller";
import { connect } from "react-redux";
import Item from "./Item";
import divisions from "../_api/divisions";
import text from "./locale/ru";

const Employees = ({ list }) => {
	const [expanded, setExpanded] = React.useState(0);

	/**
	 *
	 * @param item
	 * @param index
	 * @param expanded
	 * @param setExpanded
	 * @returns {*}
	 */
	const renderItem = (item, index, expanded, setExpanded) => {
		return (
			<Item
				key={item.id}
				item={item}
				index={index}
				expanded={expanded}
				setExpanded={setExpanded}
				renderChild={renderItem}
			/>
		);
	};

	/**
	 *
	 * @param list
	 */
	const renderList = list => {
		console.log(list);
		if (list === null || list === undefined) {
			return <div className={css.empty}>No items found</div>;
		}

		return list.map((el, i) =>
			renderItem(el, i, expanded, setExpanded),
		);
	};

	/**
	 *
	 */
	return (
		<div className={css.index}>
			<div className={css.title}>
				<h3 className={css.text}>{text.employeesTitle}</h3>

				<button className={css.closeAll}>
					{text.closeAll}
				</button>
			</div>

			{renderList(divisions)}
		</div>
	);
};

Employees.propTypes = {
	list: PropTypes.array,
};

Employees.defaultProps = {
	list: null,
};

/**
 *
 * @param state
 * @returns {null|{list: *}}
 */
const mapState = state => {
	const {
		divisions: { data },
	} = state;

	if (data === null || data === undefined) {
		return {};
	}

	return {
		list: data,
	};
};

export default connect(mapState)(Employees);
