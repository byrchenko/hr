import React from "react";
import PropTypes from "prop-types";
import css from "./Employee.scss";
import PermissionController from "../_permissions/Controller";
import { HR_PERMISSION } from "../_store/roles";
import Edit from "../_svg/edit.svg";

export const Employee = ({ item, openModal }) => {
	const {
		id,
		name,
		last_name,
		last_assessment_date,
		position,
	} = item;

	const fullName = `${name} ${last_name}`;

	return (
		<div className={css.employee} onClick={() => openModal(id)}>
			<div className={css.name}>
				{fullName}

				<span className={css.date}>
					({last_assessment_date})
				</span>
			</div>

			<div className={css.position}>
				{position}

				<PermissionController allowed={[HR_PERMISSION]}>
					<Edit className={css.edit} height={7} width={7} />
				</PermissionController>
			</div>
		</div>
	);
};

/**
 *
 */
Employee.propTypes = {
	item: PropTypes.object,
	openModal: PropTypes.func,
};

export default Employee;
