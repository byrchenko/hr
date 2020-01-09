import React from "react";
import PropTypes from "prop-types";
import css from "./Item.scss";
import {Link} from "react-router-dom";

const Item = ({title, link, isActive}) => {

	return (
		<li className={isActive ? `${css.index} ${css.active}` : css.index}>
			<Link to={link}>
				{title}
			</Link>
		</li>
	);
};

Item.propTypes = {};

Item.defaultProps = {};

export default Item;