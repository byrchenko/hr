import React from "react";
import PropTypes from "prop-types";
import css from "./Task.scss";
import Close from "../_svg/close_popup.svg";
import SelectUserInput from "../SelectUserInput";
import DatePicker from "react-datepicker/es";
import { employee, hr, supervisor } from "../_api/employee";
import Calendar from "../_svg/calendar.svg";
import { connect } from "react-redux";
import { createAssessment } from "../_actions/assessmentProcess";
import moment from "moment";
import { selectUsers } from "../_selectors/employees";

class Task extends React.Component {

	/**
	 *
	 * @param props
	 */
	constructor(props) {
		super(props);

		this.state = {
			title: null,
			evaluator: null,
			evaluating: null,
			endDate: new Date(),
		};
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
			console.log(JSON.stringify(date))
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
			console.log(evaluator);

			this.setState({
				evaluator: evaluator && evaluator.length ? evaluator[0].id : null,
			});
		};
	}

	/**
	 *
	 */
	setEvaluating() {
		return evaluating => {
			this.setState({
				evaluating: Array.isArray(evaluating)
					? evaluating.map(item => item.id)
					: null
			});
		};
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const { closePopup, sendData, users } = this.props;

		const {
			endDate,
			title,
			evaluating,
			evaluator
		} = this.state;

		return (
			<div className={css.index}>
				<div className={css.modal}>
					<h3 className={css.title}>
						Новая оценка
					</h3>

					<div className={css.taskname}>
						<input
							placeholder="Введите название оценки"
							type="text"
							onChange={this.setTitle()}
						/>
					</div>

					<div className={css.wrapper}>
						<div className={css.group}>
							<div className={css.groupTitle}>Оценивающий</div>

							<div className={css.input}>
								<SelectUserInput
									list={users}
									forwardState={this.setEvaluator()}
									max={1}
								/>
							</div>
						</div>

						<div className={css.group}>
							<div className={css.groupTitle}>Крайний срок</div>

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
						</div>

						<div className={css.group}>
							<div className={css.groupTitle}>Оцениваемый</div>

							<div className={css.input}>
								<SelectUserInput
									list={users}
									forwardState={this.setEvaluating()}
								/>
							</div>
						</div>
					</div>

					<div
						className={css.close}
						onClick={closePopup}
					>
						<Close
							width={36}
							height={36}
							fill={"#fff"}
						/>
					</div>

					<div className={css.buttons}>
						<div
							className={css.submit}
							onClick={sendData(
								title,
								moment().format('DD.MM.YYYY'),
								moment(endDate).format('DD.MM.YYYY'),
								evaluating,
								evaluator,
							)}
						>
							Запустить оценивание
						</div>

						{/*<div className={css.new}>*/}
						{/*	Запустить оценивание и создать новое*/}
						{/*</div>*/}

						<div
							className={css.cancel}
							onClick={closePopup}
						>
							Отмена
						</div>
					</div>
				</div>
			</div>
		);
	}
}

/**
 *
 * @param state
 * @returns {{users: []}}
 */
const mapState = state => {
	console.log(state);

	return {
		users: selectUsers(state)
	}
};

/**
 *
 * @param dispatch
 */
const mapDispatch = dispatch => {
	return {
		sendData: (
			title,
			startDate,
			endDate,
			employees,
			evaluatorId,
		) => () => dispatch(createAssessment(
			title,
			startDate,
			endDate,
			employees,
			evaluatorId,
		)),
	};
};

export default connect(mapState, mapDispatch)(Task);