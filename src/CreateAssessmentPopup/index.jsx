import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import SelectUserInput from "../SelectUserInput";
import DatePicker from "react-datepicker/es";
import Calendar from "../_svg/calendar.svg";
import { connect } from "react-redux";
import Title from "./Title";
import Close from "./Close";
import Buttons from "./Buttons";
import Input from "./Input";
import { dateToString, dateToStringEpoch } from "../_service/CoreMethods";

import {
	createAssessment,
	editAssessment, fetchProcessUsers,
} from "../_actions/assessmentProcess";

import {
	selectProcessHrUsers,
	selectProcessUsers,
} from "../_selectors/process";

/**
 *
 */
class CreateAssessmentPopup extends React.Component {

	/**
	 *
	 * @param props
	 */
	constructor(props) {
		super(props);

		this.state = {
			title: props.params ? props.params.title : null,
			evaluator: props.params ? [props.params.evaluator] : null,
			evaluating: props.params ? props.params.employees : null,
			endDate: props.params ? new Date(props.params.endDate * 1000) : null,
		};
	}

	componentDidMount() {
		this.props.fetchUsers();
	}

	/**
	 *
	 */
	setTitle() {
		return e => {
			this.setState({
				title: e.target.value,
			});
		};
	}

	/**
	 *
	 */
	setEndDate() {
		return date => {
			this.setState({
				endDate: date,
			});
		};
	}

	/**
	 *
	 */
	setEvaluator() {
		return evaluator => {
			this.setState({
				evaluator: evaluator && evaluator.length
					? evaluator[0].id
					: null,
			});
		};
	}

	/**
	 *
	 */
	setEvaluating() {
		return evaluating => {
			console.log(evaluating);

			console.log(Array.isArray(evaluating)
				? evaluating.map(item => item.id)
				: null);

			this.setState({
				evaluating: Array.isArray(evaluating)
					? evaluating.map(item => item.id)
					: null,
			});
		};
	}

	/**
	 * Compose all data into updated assessment object
	 */
	getUpdatedAssessment() {
		const { params } = this.props;

		const {
			evaluating,
			evaluator,
			endDate,
			title,
		} = this.state;

		return {
			id: params.id,
			title,
			startDate: dateToStringEpoch(params.startDate),
			endDate: dateToString(endDate),
			evaluatorId: Array.isArray(evaluator) ? evaluator[0].id : evaluator,
			employees: evaluating,
		};
	}

	/**
	 * Compose all data into new assessment object
	 */
	getNewAssessment() {
		const {
			title,
			endDate,
			evaluating,
			evaluator,
		} = this.state;

		return {
			title,
			startDate: dateToStringEpoch(new Date().getTime() / 1000),
			endDate: dateToString(endDate),
			employees: evaluating,
			evaluatorId: evaluator,
		};
	}

	/**
	 * Popup submit action
	 */
	handleSubmit() {
		return () => {
			const {
				params,
				editAssessment,
				createAssessment,
			} = this.props;

			console.log(params);

			if (params) {
				editAssessment(this.getUpdatedAssessment());
			} else {
				createAssessment(this.getNewAssessment());
			}
		};
	}

	/**
	 *
	 * @returns {function(): *}
	 */
	renderEvaluatorInput() {
		return () => {
			const { evaluator } = this.state;
			const { hrUsers } = this.props;

			return (
				<div className={css.input}>
					<SelectUserInput
						selected={evaluator}
						list={hrUsers}
						forwardState={this.setEvaluator()}
						max={1}
					/>
				</div>
			);
		};
	}

	/**
	 *
	 */
	renderEvaluatingInput() {
		return () => {
			const { users } = this.props;
			const { evaluating } = this.state;

			return (
				<div className={css.input}>
					<SelectUserInput
						selected={evaluating}
						list={users}
						forwardState={this.setEvaluating()}
					/>
				</div>
			);
		};
	}

	/**
	 *
	 */
	renderDateInput() {
		return () => {
			const { endDate } = this.state;

			return (
				<div className={`${css.input} ${css.inputDate}`}>
					<DatePicker
						className={css.date}
						selected={endDate}
						onChange={this.setEndDate()}
						dateFormat={"dd.MM.yyyy"}
					/>

					<Calendar
						width={14}
						height={13}
						className={css.calendar}
					/>
				</div>
			);
		};
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const { closePopup, params } = this.props;
		const { title } = this.state;

		return (
			<div className={css.overlay}>
				<div className={css.modal}>
					<Title
						title={title}
						setTitle={this.setTitle()}
					/>

					<div className={css.wrapper}>
						<Input
							title={"Оценивающий"}
							renderItem={this.renderEvaluatorInput()}
						/>

						<Input
							title={"Крайний срок"}
							renderItem={this.renderDateInput()}
						/>

						<Input
							title={"Оцениваемый"}
							renderItem={this.renderEvaluatingInput()}
						/>
					</div>


					<Buttons
						submit={this.handleSubmit()}
						cancel={closePopup}
						isEditing={!!params}
					/>

					<Close handleClose={closePopup}/>
				</div>
			</div>
		);
	}
}

/**
 *
 */
CreateAssessmentPopup.propTypes = {
	params: PropTypes.object,
	closePopup: PropTypes.func,
	createAssessment: PropTypes.func,
	editAssessment: PropTypes.func,
	fetchUsers: PropTypes.func,
	users: PropTypes.array,
	hrUsers: PropTypes.array,
};

/**
 *
 * @param state
 */
const mapState = state => {
	const { popups: { data, employees } } = state;

	return {
		params: data,
		users: selectProcessUsers(state),
		hrUsers: selectProcessHrUsers(state),
	};
};

/**
 *
 * @param dispatch
 */
const mapDispatch = dispatch => {
	return {
		createAssessment: assessment => {
			dispatch(createAssessment(assessment));
		},
		editAssessment: assessment => {
			dispatch(editAssessment(assessment));
		},
		fetchUsers: () => dispatch(fetchProcessUsers()),
	};
};

export default connect(mapState, mapDispatch)(CreateAssessmentPopup);