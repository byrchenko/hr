import React from "react";
import PropTypes from "prop-types";
import css from "./List.scss";
import Item from "./Item";

/**
 *
 * @param item
 * @returns {*}
 */
function renderItem(item) {
	const { id, title, description, mark, comment } = item;

	return (
		<Item
			key={id}
			id={id}
			title={title}
			description={description}
			mark={mark}
			comment={comment}
		/>
	);
}

/**
 *
 * @param list
 */
function renderList(list) {
	if (!list) {
		return null;
	}

	return list.map(renderItem);
}

/**
 *
 * @param data
 * @returns {*}
 * @constructor
 */
const List = ({ data }) => {
	const { title, questions } = data;

	return (
		<div className={css.index}>
			<h3 className={css.title}>{title}</h3>

			{renderList(questions)}
		</div>
	);
};

/**
 *
 * @type {{data: shim}}
 */
List.propTypes = {
	data: PropTypes.object,
};

export default List;
