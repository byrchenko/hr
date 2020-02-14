import React from "react";
import PropTypes from "prop-types";
import css from "./Search.scss";

const Search = ({changeFilter, value, refNode}) => {
	return (
		<input
			ref={refNode}
			className={css.index}
			type="text"
			value={value ? value : ''}
			onChange={e => changeFilter(e.target.value)}
			autoFocus={true}
		/>
	);
};

/**
 *
 * @type {{ref: shim, changeFilter: shim, value: shim}}
 */
Search.propTypes = {
	changeFilter: PropTypes.func,
	value: PropTypes.string,
	refNode: PropTypes.object,
};

export default Search;