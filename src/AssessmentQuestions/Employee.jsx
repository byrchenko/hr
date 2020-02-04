import React from "react";
import PropTypes from "prop-types";
import css from "./Employee.scss";

const Employee = ({ employee }) => {
	const { name, last_name, position, image } = employee;
	const fullName = `${last_name} ${name}`;

	return (
		<div className={css.index}>
			<div className={css.picture}>
				<img src={image} alt={fullName} title={fullName} />
			</div>

			<div className={css.info}>
				<div className={css.name}>{fullName}</div>

				<div className={css.position}>{position}</div>
			</div>
		</div>
	);
};

/**
 *
 */
Employee.propTypes = {
	employee: PropTypes.object,
};

export default Employee;
