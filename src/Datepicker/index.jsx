import React from "react";
import PropTypes from "prop-types";
import "./datepicker-cssmodules.scss";
import DatePicker from "react-datepicker";

const index = props => {

	return (
		<DatePicker {...props}/>
	);
};

index.propTypes = {};

index.defaultProps = {};

export default index;