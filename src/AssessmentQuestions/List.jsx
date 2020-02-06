import React from "react";
import PropTypes from "prop-types";
import css from "./List.scss";
import Item from "./Item";

/**
 *
 * @param data
 * @param answers
 * @returns {*}
 * @constructor
 */
const List = ({ data, errors }) => {
	const { title, questions } = data;

	/**
	 *
	 * @param item
	 * @returns {*}
	 */
	const renderItem = item => {
		const { id, title, description, mark, comment } = item;
		let error = null;

		if (errors) {
			error = errors[id];
		}

		return (
			<Item
				key={id}
				id={id}
				title={title}
				description={description}
				initialMark={mark}
				initialComment={comment}
				error={error}
			/>
		);
	};

	/**
	 *
	 * @param list
	 */
	const renderList = list => {
		if (!list) {
			return null;
		}

		return list.map(renderItem);
	};

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
	errors: PropTypes.object,
};

export default List;
