import React from "react";
import PropTypes from "prop-types";
import css from "./List.scss";

/**
 *
 * @param list
 * @param renderItem
 * @returns {*}
 */
function renderList(list, renderItem) {
	if (!list || !list.length) {
		return (
			<div>Nothing found..</div>
		)
	}

	return list.map(renderItem)
}

/**
 *
 * @param list
 * @param renderItem
 * @param refNode
 * @returns {*}
 * @constructor
 */
const List = ({list, renderItem, refNode}) => {
	return (
		<div
			className={css.index}
			ref={refNode}
		>
			{renderList(list, renderItem)}
		</div>
	);
};

/**
 *
 */
List.propTypes = {
	list: PropTypes.array,
	renderItem: PropTypes.func,
	refNode: PropTypes.object
};

export default List;