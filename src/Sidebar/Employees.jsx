import React from "react";
import PropTypes from "prop-types";
import css from "./Employees.scss";
import { connect } from "react-redux";
import Item from "./Item";
import { divisions } from "../_dispatchers";
import text from "./locale/ru";
import Preloader from "../Preloader";

/**
 *
 * @param list
 * @param loading
 * @returns {*}
 * @constructor
 */
const Employees = ({ list, loading }) => {
	const [expanded, setExpanded] = React.useState(0);

	if (loading) {
		return (
			<Preloader />
		)
	}

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
		if (!Array.isArray(list)) {
			return <div className={css.empty}>Nothing found..</div>;
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
	loading: PropTypes.bool,
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
		divisions: {
			loading
		}
	} = state;

	return {
		list: divisions(state),
		loading
	};
};

export default connect(mapState)(Employees);
