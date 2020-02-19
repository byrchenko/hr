import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import Header from "./Header";
import Employee from "./Employee";
import List from "./List";
import {
	selectAssessmentAnswers,
	selectAssessmentData,
	selectAssessmentEmployee,
	selectAssessmentError, selectAssessmentId,
	selectAssessmentIsLastStep,
	selectAssessmentLoading,
	selectAssessmentStep,
	selectAssessmentSync,
	selectAssessmentValidationErrors,
} from "../_dispatchers";
import { connect } from "react-redux";
import Previous from "./Previous";
import Next from "./Next";
import ApiInterface from "../_service/ApiInterface";
import Preloader from "../_svg/preloader.svg";
import { INVALID_COMMENT, INVALID_MARK } from "./constants";
import {
	addValidationError,
	addValidationErrors,
	clearValidationErrors,
} from "../_actions";

/**
 *
 */
class AssessmentQuestions extends React.Component {

	/**
	 *
	 */
	renderError() {
		const { error } = this.props;

		if (error) {
			return <div className={css.error}>Error..</div>;
		}
	}

	/**
	 *
	 */
	isValidForm() {
		return cb => {
			const { answers, addErrors, clearErrors } = this.props;

			let errors = {};
			let valid = true;

			answers.forEach(el => {
				const { id, mark, comment } = el;

				if (mark === null) {
					errors[id] = {
						id,
						type: INVALID_MARK,
					};

					valid = false;

					return;
				}

				if (
					mark !== 3 &&
					(comment === null || comment === "")
				) {
					errors[id] = {
						id,
						type: INVALID_COMMENT,
					};

					valid = false;
				}
			});

			if (Object.keys(errors).length) {
				addErrors(errors);
			} else {
				clearErrors();
			}

			if (valid) {
				cb();
			}
		};
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const {
			block,
			employee,
			step,
			isLast,
			goPrev,
			goNext,
			errors,
			pushAnswers,
			answers,
			assessment,
			loading
		} = this.props;

		if (loading) {
			return (
				<Preloader />
			)
		}

		return (
			<div className={css.index}>
				<Header/>

				<div className={css.content}>
					<Employee employee={employee}/>

					<List data={block} errors={errors}/>

					{step > 1 && <Previous goPrev={goPrev}/>}

					<Next
						isLastStep={isLast}
						pushAnswers={() => pushAnswers(
							assessment,
							answers,
							isLast,
							() => goNext(assessment, employee, step),
						)}
						validate={this.isValidForm()}
					/>
				</div>

				{this.renderError()}
			</div>
		);
	}
}

/**
 *
 */
AssessmentQuestions.propTypes = {
	step: PropTypes.number,
	block: PropTypes.object,
	answers: PropTypes.array,
	employee: PropTypes.object,
	isLast: PropTypes.bool,
	goPrev: PropTypes.func,
	goNext: PropTypes.func,
	addErrors: PropTypes.func,
	clearErrors: PropTypes.func,
	pushAnswers: PropTypes.func,
	loading: PropTypes.bool,
	error: PropTypes.bool,
	errors: PropTypes.object,
	assessment: PropTypes.number,
};

/**
 *
 * @param state
 * @returns {{block: *}}
 */
const mapState = state => {
	return {
		answers: selectAssessmentAnswers(state),
		block: selectAssessmentData(state),
		employee: selectAssessmentEmployee(state),
		step: selectAssessmentStep(state),
		isLast: selectAssessmentIsLastStep(state),
		loading: selectAssessmentLoading(state),
		error: selectAssessmentError(state),
		errors: selectAssessmentValidationErrors(state),
		assessment: selectAssessmentId(state),
	};
};

/**
 *
 * @param dispatch
 * @returns {{goPrev: (function(...[*]=))}}
 */
const mapDispatch = dispatch => {
	return {
		goPrev: () => ApiInterface.assessmentGoPrev(dispatch),
		goNext: (
			assessment,
			user,
			step,
		) => ApiInterface.assessmentGoNext(
			dispatch,
			assessment,
			user,
			step,
		),
		pushAnswers: (
			assessment,
			questions,
			isLast,
			goNext,
		) => ApiInterface.assessmentPushAnswer(
			dispatch,
			assessment,
			questions,
			isLast,
			goNext,
		),
		addErrors: (id, type) =>
			dispatch(addValidationErrors(id, type)),
		clearErrors: () => dispatch(clearValidationErrors()),
	};
};

export default connect(mapState, mapDispatch)(AssessmentQuestions);
