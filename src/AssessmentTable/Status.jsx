import React from "react";
import PropTypes from "prop-types";
import css from "./Status.scss";

import {
	EMPLOYEE_PERMISSION,
	HR_PERMISSION,
	SUPERVISOR_PERMISSION,
} from "../_store/roles";

import {
	COMPLETE_BUTTON,
	WAITING_BUTTON,
	ESTIMATE_BUTTON,
	MEETING_BUTTON,
} from "./constants";

import { connect } from "react-redux";
import Complete from "../_svg/complete.svg";
import Wait from "../_svg/wait.svg";

/**
 *
 * @type {{waiting: (function(): *), estimate: (function(): *), complete: (function(): *), meeting: (function(): *)}}
 */
const button = {
	[COMPLETE_BUTTON]: () => (
		<div className={css.complete}>
			<Complete width={20} height={20} />
		</div>
	),
	[WAITING_BUTTON]: () => (
		<div className={css.waiting}>
			<Wait width={14} height={14} />
		</div>
	),
	[ESTIMATE_BUTTON]: () => (
		<div className={css.estimate}>Оценить</div>
	),
	[MEETING_BUTTON]: () => (
		<div className={css.meeting}>Провести встречу</div>
	),
};

/**
 *
 * @param employee
 * @param supervisor
 * @param hr
 * @param role
 * @returns {*}
 * @constructor
 */
const Status = ({ employee, supervisor, hr, role }) => {
	/**
	 *
	 * @param type
	 * @param isChecked
	 * @returns {*}
	 */
	function renderStatus(type, isChecked) {
		const handler = {
			[HR_PERMISSION]: button[MEETING_BUTTON],
			[EMPLOYEE_PERMISSION]: button[ESTIMATE_BUTTON],
			[SUPERVISOR_PERMISSION]: button[ESTIMATE_BUTTON],
		};

		if (isChecked) {
			return button[COMPLETE_BUTTON]();
		}

		if (role === type) {
			return handler[role]();
		}

		return button[WAITING_BUTTON]();
	}

	return (
		<>
			<div className={css.status}>
				{renderStatus(SUPERVISOR_PERMISSION, supervisor)}
			</div>

			<div className={css.status}>
				{renderStatus(EMPLOYEE_PERMISSION, employee)}
			</div>

			<div className={css.status}>
				{renderStatus(HR_PERMISSION, hr)}
			</div>
		</>
	);
};

/**
 *
 * @param state
 * @returns {{role: *}}
 */
const mapState = state => {
	const {
		employee: { data },
	} = state;

	if (data === null) {
		return {
			role: null,
		};
	}

	const { role } = data;

	return {
		role,
	};
};

export default connect(mapState)(Status);
