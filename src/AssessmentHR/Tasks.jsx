import React from "react";
import PropTypes from "prop-types";
import css from "./Tasks.scss";

class Tasks extends React.Component {

	/**
	 *
	 * @returns {*}
	 */
	renderTasks() {
		const {tasks, renderTask} = this.props;

		console.log(tasks);

		if (tasks === null) {
			return null;
		}

		return tasks.map(renderTask)
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const {addTask} = this.props;

		return (
			<div className={css.index}>
				<h3 className={css.title}>Задачи по итогу оценивания</h3>

				{this.renderTasks()}

				<div
					className={css.add}
					onClick={() => addTask()}
				>
					+ Добавить задачу
				</div>
			</div>
		)
	}
}

/**
 *
 * @type {{renderTask: shim}}
 */
Tasks.propTypes = {
	renderTask: PropTypes.func,
	tasks: PropTypes.array,
	addTask: PropTypes.func
};

export default Tasks;
