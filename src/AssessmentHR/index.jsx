import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import Users from "./Users";
import Wrapper from "./Wrapper";
import data from "../_api/assessmentHr";
import Blocks from "./Blocks";
import Block from "./Block";
import Question from "./Question";
import Questions from "./Questions";
import marks from "../AssessmentQuestions/marks";
import Mark from "./Mark";
import text from "../AssessmentQuestions/locale/ru";
import Tasks from "./Tasks";
import uniqid from "uniqid";
import Task from "./Task";

class index extends React.Component {
	/**
	 *
	 * @param props
	 */
	constructor(props) {
		super(props);

		this.state = {

			answers: {},
			tasks: null,
		};
	}

	/**
	 *
	 * @returns {{date: null, id: *, title: null}}
	 * @private
	 */
	_createEmptyTask() {
		return {
			id: uniqid(),
			title: "",
			date: new Date(),
		};
	}

	/**
	 *
	 * @returns {function(...[*]=)}
	 */
	addTask() {
		return () => {
			this.setState(prevState => {
				const {tasks} = prevState;

				const task = this._createEmptyTask();

				if (tasks === null) {
					return {
						tasks: [task]
					}
				}

				tasks.push(task);

				return {tasks};
			})
		};
	}

	/**
	 *
	 * @returns {function(...[*]=)}
	 */
	removeTask() {
		return id => {
			this.setState(prevState => {
				return {
					tasks: prevState.tasks.filter(item => {
						return item.id !== id;
					}),
				};
			});
		};
	}

	/**
	 *
	 * @returns {function(...[*]=)}
	 */
	updateTaskTitle() {
		return (id, title) => {
			this.setState(prevState => {
				return {
					tasks: prevState.tasks.map(item => {
						if (item.id === id) {
							item.title = title;

							return item;
						}

						return item;
					})
				}
			})
		}
	}

	/**
	 *
	 * @returns {function(...[*]=)}
	 */
	updateTaskDate() {
		return (id, date) => {
			this.setState(prevState => {
				return {
					tasks: prevState.tasks.map(item => {
						if (item.id === id) {
							item.date = date;

							return item;
						}

						return item;
					})
				}
			})
		}
	}

	/**
	 *
	 * @returns {function(*): *}
	 */
	renderTask() {
		return item => {
			return (
				<Task
					key={item.id}
					item={item}
					add={this.addTask()}
					remove={this.removeTask()}
					updateTitle={this.updateTaskTitle()}
					updateDate={this.updateTaskDate()}
				/>
			);
		}
	}

	/**
	 *
	 * @param id
	 * @returns {function(...[*]=)}
	 */
	setMark(id) {
		return mark => {
			this.setState(prevState => {
				const { answers } = prevState;

				answers[id] = Object.assign({}, answers[id], {
					mark,
				});

				return {
					answers,
				};
			});
		};
	}

	/**
	 *
	 */
	renderMark(id) {
		const { answers } = this.state;

		const answer = answers[id];

		return mark => {
			return (
				<Mark
					key={mark.value}
					question={id}
					item={mark}
					selected={answer ? answer.mark : null}
					setMark={this.setMark(id)}
				/>
			);
		};
	}

	/**
	 *
	 */
	renderMarks() {
		return question => {
			const { id } = question;

			return () => {
				return marks.map(this.renderMark(id));
			};
		};
	}

	/**
	 *
	 * @param id
	 * @returns {function(...[*]=)}
	 */
	setComment(id) {
		return e => {
			const value = e.target.value;

			this.setState(prevState => {
				const { answers } = prevState;

				answers[id] = Object.assign({}, answers[id], {
					comment: value,
				});

				return {
					answers,
				};
			});
		};
	}

	/**
	 *
	 * @returns {function(...[*]=)}
	 */
	renderComment(id) {
		const { answers } = this.state;

		const answer = answers[id];

		return () => {
			return (
				<textarea
					className={css.comment}
					rows="4"
					placeholder={text.comment}
					onChange={this.setComment(id)}
					value={answer ? answer.comment : ""}
				/>
			);
		};
	}

	/**
	 *
	 * @returns {function(): *}
	 */
	renderQuestion() {
		return question => {
			return (
				<Question
					key={question.id}
					item={question}
					renderMarks={this.renderMarks()}
					renderComment={this.renderComment(question.id)}
				/>
			);
		};
	}

	/**
	 *
	 * @returns {function(): *}
	 */
	renderQuestions() {
		return questions => {
			return (
				<Questions
					list={questions}
					renderQuestion={this.renderQuestion()}
				/>
			);
		};
	}

	/**
	 *
	 * @returns {*}
	 */
	renderBlock() {
		return block => {
			return (
				<Block
					key={block.id}
					item={block}
					renderQuestions={this.renderQuestions()}
				/>
			);
		};
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const { blocks, evaluated, evaluator, finalizer } = data;
		const {tasks} = this.state;

		return (
			<Wrapper>
				<Users
					evaluated={evaluated}
					evaluator={evaluator}
					finalizer={finalizer}
				/>

				<Blocks
					list={blocks}
					renderBlock={this.renderBlock()}
				/>

				<Tasks
					tasks={tasks}
					renderTask={this.renderTask()}
					addTask={this.addTask()}
				/>
			</Wrapper>
		);
	}
}

export default index;
