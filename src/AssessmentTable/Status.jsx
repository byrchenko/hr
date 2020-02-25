import React from "react";
import PropTypes from "prop-types";
import css from "./Status.scss";
import ApiInterface from "../_service/ApiMethods";

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
import { role } from "../_dispatchers";
import { assessmentHrStart, assessmentStart } from "../_actions";
import { startAssessment } from "../_actions/assessment";

/**
 *
 * @param isChecked
 * @param role
 * @param startAssessment
 * @returns {*}
 */
function renderEvaluatorStatus(
	isChecked,
	role,
	startAssessment
) {
	const type = 'evaluator';

	if (isChecked) {
		return (
			<div className={css.complete}>
				<Complete
					width={20}
					height={20}
				/>
			</div>
		)
	}

	if (role === type) {
		return (
			<div
				className={css.estimate}
				onClick={startAssessment}
			>
				Оценить
			</div>
		)
	}

	return (
		<div className={css.waiting}>
			<Wait
				width={14}
				height={14}
			/>
		</div>
	)
}

/**
 *
 * @param isChecked
 * @param role
 * @param startAssessment
 * @returns {*}
 */
function renderEvaluatingStatus(
	isChecked,
	role,
	startAssessment
) {
	const type = 'evaluating';

	if (isChecked) {
		return (
			<div className={css.complete}>
				<Complete
					width={20}
					height={20}
				/>
			</div>
		)
	}

	if (role === type) {
		return (
			<div
				className={css.estimate}
				onClick={startAssessment}
			>
				Оценить
			</div>
		)
	}

	return (
		<div className={css.waiting}>
			<Wait
				width={14}
				height={14}
			/>
		</div>
	)
}

/**
 *
 * @param isChecked
 * @param role
 * @param startAssessment
 * @param isReady
 * @returns {*}
 */
function renderRecruiterStatus(
	isChecked,
	role,
	startAssessment,
	isReady
) {
	const type = 'recruiter';

	if (isChecked) {
		return (
			<div className={css.complete}>
				<Complete
					width={20}
					height={20}
				/>
			</div>
		)
	}

	if (role === type && isReady) {
		return (
			<div
				className={css.meeting}
				onClick={startAssessment}
			>
				Провести встречу
			</div>
		)
	}

	return (
		<div className={css.waiting}>
			<Wait
				width={14}
				height={14}
			/>
		</div>
	)
}

/**
 *
 * @param employee
 * @param supervisor
 * @param hr
 * @param role
 * @param startAssessment
 * @param user
 * @returns {*}
 * @constructor
 */
const Status = ({
	employee,
	supervisor,
	hr,
	role,
	startAssessment,
	startAssessmentHr,
	assessment
}) => {
	return (
		<>
			<div className={css.status}>
				{renderEvaluatorStatus(
					supervisor,
					role,
					startAssessment(assessment.id, assessment.employee)
				)}
			</div>

			<div className={css.status}>
				{renderEvaluatingStatus(
					employee,
					role,
					startAssessment(assessment.id, assessment.employee)
				)}
			</div>

			<div className={css.status}>
				{renderRecruiterStatus(
					hr,
					role,
					startAssessmentHr(assessment.id, assessment.employee.id),
					supervisor && employee
				)}
			</div>
		</>
	);
};

/**
 *
 */
const mapDispatch = (dispatch, props) => {

	return {
		startAssessment: (assessmentId, employeeId) => () => dispatch(startAssessment(employeeId, assessmentId)),
		startAssessmentHr: (assessmentId, assessmentUser) => () => dispatch(assessmentHrStart(assessmentId, assessmentUser)),
	};
};

export default connect(null, mapDispatch)(Status);
