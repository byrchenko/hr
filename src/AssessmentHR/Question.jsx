import React from "react";
import PropTypes from "prop-types";
import css from "./Question.scss";

class Question extends React.Component {
	/**
	 *
	 * @param data
	 * @returns {*}
	 */
	renderComment(data) {
		if (typeof data === "function") {
			return (
				<div className={css.comment}>
					<div className={css.heading}>Комментарий</div>

					{data()}
				</div>
			);
		}

		return (
			<div className={css.comment}>
				<div className={css.heading}>Комментарий</div>

				<div className={css.text}>{data.comment}</div>
			</div>
		);
	}

	/**
	 *
	 * @returns {*}
	 */
	renderComments() {
		const {
			renderComment,
			item: { hr, employee, supervisor },
		} = this.props;

		return (
			<div className={css.list}>
				{this.renderComment(employee)}

				{this.renderComment(supervisor)}

				{this.renderComment(renderComment)}
			</div>
		);
	}

	/**
	 *
	 * @param data
	 */
	renderMark(data) {
		if (typeof data === "function") {
			return (
				<div className={css.mark}>
					<div className={css.heading}>Оценка</div>

					<div className={css.marks}>{data()}</div>
				</div>
			);
		}

		return (
			<div className={css.mark}>
				<div className={css.heading}>Оценка</div>

				<div className={css.numb}>{data.mark}</div>

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
			renderMarks,
			item,
			item: { hr, employee, supervisor },
		} = this.props;

		return (
			<div className={css.list}>
				{this.renderMark(employee)}

				{this.renderMark(supervisor)}

				{this.renderMark(renderMarks(item))}
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
