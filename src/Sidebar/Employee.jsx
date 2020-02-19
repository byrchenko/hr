import React from "react";
import PropTypes from "prop-types";
import css from "./Employee.scss";
import PermissionController from "../_permissions/Controller";
import { HR_PERMISSION } from "../_store/roles";
import Edit from "../_svg/edit.svg";
import { connect } from "react-redux";
import { openPopup } from "../_actions";
import { CHANGE_POSITION_POPUP } from "../Popuper/popups";
import { role } from "../_dispatchers";

/**
 *
 * @param item
 * @param openPopup
 * @param role
 * @returns {*}
 * @constructor
 */
export const Employee = ({ item, openPopup, role }) => {
	const {
		id,
		name,
		last_name,
		last_assessment_date,
		position,
	} = item;

	const fullName = (name ? name : "") + (last_name ? " " + last_name : "");

	return (
		<div
			className={css.employee}
			onClick={
				role === HR_PERMISSION ? () => openPopup(id) : null
			}
		>
			<div className={css.name}>
				{fullName}

				<span className={css.date}>
					({last_assessment_date ? last_assessment_date : 'Нет данных'})
				</span>
			</div>

			<div className={css.position}>
				{position ? position : 'Нет данных'}

				<PermissionController allowed={[HR_PERMISSION]}>
					<Edit className={css.edit} height={7} width={7}/>
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
	openPopup: PropTypes.func,
	role: PropTypes.string,
};

/**
 *
 * @param state
 * @returns {{role: *}}
 */
const mapState = state => {
	return {
		role: role(state),
	};
};

/**
 *
 * @param dispatch
 * @returns {{}}
 */
const mapDispatch = dispatch => {
	return {
		openPopup: employee =>
			dispatch(openPopup(CHANGE_POSITION_POPUP, { employee })),
	};
};

export default connect(mapState, mapDispatch)(Employee);
