import React from "react";
import PropTypes from "prop-types";
import css from "./User.scss";
import ArrowLeft from "../_svg/arr-l.svg";
import text from "./locale/ru";
import PermissionController from "../_permissions/Controller";
import {
	HR_PERMISSION,
	SUPERVISOR_PERMISSION,
} from "../_store/roles";
import { employee } from "../_dispatchers";
import { connect } from "react-redux";

/**
 *
 * @param changeSide
 * @param employee
 * @returns {*}
 * @constructor
 */
const User = ({ changeSide, employee }) => {
	const {
		name,
		last_name,
		image,
		department,
		position,
		last_assessment_date,
	} = employee;

	const fullName = `${name} ${last_name}`;

	/**
	 *
	 * @returns {*}
	 */
	function renderButton() {
		return (
			<PermissionController
				allowed={[HR_PERMISSION, SUPERVISOR_PERMISSION]}
			>
				<div
					className={css.showStructure}
					onClick={changeSide}
					title={text.showEmployees}
				>
					<ArrowLeft />

					<span className={css.text}>
						{text.showEmployees}
					</span>
				</div>
			</PermissionController>
		);
	}

	/**
	 *
	 */
	return (
		<div className={css.index}>
			{renderButton()}

			<div className={css.main}>
				<div className={css.picture}>
					<img
						src={image}
						alt={fullName}
						title={fullName}
					/>
				</div>

				<div className={css.fullname}>
					<h3 className={css.name}>{name}</h3>

					<h3 className={css.name}>{last_name}</h3>
				</div>
			</div>

			<div className={css.info}>
				<h5 className={css.title}>{text.division}</h5>
				<h3 className={css.descr}>{department}</h3>
			</div>

			<div className={css.info}>
				<h5 className={css.title}>{text.position}</h5>
				<h3 className={css.descr}>{position}</h3>
			</div>

			<div className={css.info}>
				<h5 className={css.title}>{text.lastAssessment}</h5>
				<h3 className={css.descr}>{last_assessment_date}</h3>
			</div>
		</div>
	);
};

/**
 *
 */
User.propTypes = {
	changeSide: PropTypes.func,
	employee: PropTypes.object,
};

/**
 *
 * @param state
 * @returns {{employee: (function(*): *)}}
 */
const mapState = state => {
	return {
		employee: employee(state),
	};
};

export default connect(mapState)(User);
