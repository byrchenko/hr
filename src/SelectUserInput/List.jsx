import React from "react";
import PropTypes from "prop-types";
import css from "./List.scss";

const List = ({list, renderItem, refNode}) => {
	return (
		<div
			className={css.index}
			ref={refNode}
		>
			{list.map(renderItem)}
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