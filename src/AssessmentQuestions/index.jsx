import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import Header from "./Header";
import Employee from "./Employee";
import List from "./List";
import {
	selectAssessmentData,
	selectAssessmentEmployee,
	selectAssessmentError,
	selectAssessmentIsLastStep,
	selectAssessmentLoading,
	selectAssessmentStep,
	selectAssessmentSync,
} from "../_dispatchers";
import { connect } from "react-redux";
import Previous from "./Previous";
import Next from "./Next";
import ApiInterface from "../_service/ApiInterface";
import Preloader from "../_svg/preloader.svg";

/**
 *
 */
class AssessmentQuestions extends React.Component {
	/**
	 *
	 */
	renderLoading() {
		const { loading } = this.props;

		if (loading) {
			return (
				<div className={css.loading}>
					<Preloader width={64} height={64} />
				</div>
			);
		}
	}

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
			sync,
		} = this.props;

		return (
			<div className={css.index}>
				<Header />

				<div className={css.content}>
					<Employee employee={employee} />

					<List data={block} />

					<Previous
						isFirstStep={step === 1}
						goPrev={goPrev}
					/>

					<Next isLastStep={isLast} goNext={goNext} />
				</div>

				{this.renderLoading()}

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
	employee: PropTypes.object,
	isLast: PropTypes.bool,
	goPrev: PropTypes.func,
	goNext: PropTypes.func,
	loading: PropTypes.bool,
	error: PropTypes.bool,
};

/**
 *
 * @param state
 * @returns {{block: *}}
 */
const mapState = state => {
	return {
		block: selectAssessmentData(state),
		employee: selectAssessmentEmployee(state),
		step: selectAssessmentStep(state),
		isLast: selectAssessmentIsLastStep(state),
		loading: selectAssessmentLoading(state),
		error: selectAssessmentError(state),
		sync: selectAssessmentSync(state),
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
		goNext: () => ApiInterface.assessmentGoNext(dispatch),
	};
};

export default connect(mapState, mapDispatch)(AssessmentQuestions);
