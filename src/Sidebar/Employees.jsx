import React from "react";
import PropTypes from "prop-types";
import css from "./Employees.scss";
import { connect } from "react-redux";
import Item from "./Item";
import { divisions } from "../_dispatchers";
import text from "./locale/ru";

/**
 *
 * @param list
 * @returns {*}
 * @constructor
 */
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
		if (list === null || list === undefined) {
			return <div className={css.empty}>No items found</div>;
		}

		return list.map((item, index) =>
			renderItem(item, index, expanded, setExpanded),
		);
	};

	/**
	 *
	 */
	return (
		<div className={css.index}>
			<div className={css.title}>
				<h3 className={css.text}>{text.employeesTitle}</h3>
			</div>

			{renderList(list)}
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
	return {
		list: divisions(state),
	};
};

export default connect(mapState)(Employees);
