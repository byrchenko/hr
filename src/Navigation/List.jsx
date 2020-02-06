import React from "react";
import PropTypes from "prop-types";
import css from "./List.scss";

const List = ({renderList}) => {

	return (
		<ul className={css.index}>
			{renderList()}
		</ul>
	);
};

List.propTypes = {};

List.defaultProps = {};

export default List;