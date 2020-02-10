import React from "react";
import PropTypes from "prop-types";
import css from "./Question.scss";

class Question extends React.Component {
	/**
	 *
	 * @param user
	 * @returns {*}
	 */
	renderComment(user) {
		return (
			<div className={css.comment}>
				<div className={css.heading}>Комментарий</div>

				<div className={css.text}>{user.comment}</div>
			</div>
		);
	}

	/**
	 *
	 * @returns {*}
	 */
	renderComments() {
		const {
			item: { hr, employee, supervisor },
		} = this.props;

		return (
			<div className={css.list}>
				{this.renderComment(employee)}

				{this.renderComment(supervisor)}

				{this.renderComment(hr)}
			</div>
		);
	}

	/**
	 *
	 * @param user
	 */
	renderMark(user) {
		return (
			<div className={css.mark}>
				<div className={css.heading}>Оценка</div>

				<div className={css.numb}>{user.mark}</div>

				<div className={css.descr}>
					уровень компетенции и результативности на
					ожидаемом для данной должности уровне
				</div>
			</div>
		);
	}

	/**
	 *
	 * @returns {*}
	 */
	renderMarks() {
		const {
			item: { hr, employee, supervisor },
		} = this.props;

		return (
			<div className={css.list}>
				{this.renderMark(employee)}

				{this.renderMark(supervisor)}

				{this.renderMark(hr)}
			</div>
		);
	}

	/**
	 *
	 * @returns {*}
	 */
	renderTitle() {
		const {
			item: { title },
		} = this.props;

		return (
			<div className={css.item}>
				<div className={css.title}>{title}</div>
			</div>
		);
	}

	/**
	 *
	 * @returns {*}
	 */
	renderTitles() {
		return (
			<div className={css.list}>
				{this.renderTitle()}

				{this.renderTitle()}

				{this.renderTitle()}
			</div>
		);
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<div className={css.question}>
				{this.renderTitles()}

				{this.renderMarks()}

				{this.renderComments()}
			</div>
		);
	}
}

/**
 *
 * @type {{item: shim, question: shim}}
 */
Question.propTypes = {
	item: PropTypes.object,
};

Question.defaultProps = {};

export default Question;
