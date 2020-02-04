import React from "react";
import PropTypes from "prop-types";
import css from "./Item.scss";
import marks from "./marks";
import Mark from "./Mark";
import text from "./locale/ru";
import { connect } from "react-redux";
import { addAnswer } from "../_actions";

/**
 *
 * @param id
 * @param title
 * @param description
 * @param mark
 * @param comment
 * @param addAnswer
 * @returns {*}
 * @constructor
 */
const Item = ({
	id,
	title,
	description,
	mark,
	comment,
	addAnswer,
}) => {
	const [commentValue, setCommentValue] = React.useState(comment);
	const [markValue, setMarkValue] = React.useState(mark);

	/**
	 *
	 */
	React.useEffect(() => {
		const answer = {
			id,
			mark: markValue,
			comment: commentValue,
		};

		addAnswer(answer);

		// TODO: write reducer for addAnswer action
	}, [commentValue, markValue]);

	/**
	 *
	 */
	const renderMark = () => {
		return (
			<Mark
				key={mark}
				question={id}
				item={mark}
				selected={markValue}
				setMark={setMarkValue}
			/>
		);
	};

	/**
	 *
	 */
	const renderMarks = () => {
		return marks.map(renderMark);
	};

	return (
		<div className={css.index}>
			<h4 className={css.title}>{title}</h4>

			<p className={css.description}>{description}</p>

			<div className={css.mark}>{renderMarks()}</div>

			<textarea
				className={css.comment}
				name=""
				rows="4"
				placeholder={text.comment}
				onChange={e => setCommentValue(e.target.value)}
				value={commentValue}
			/>
		</div>
	);
};

Item.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	description: PropTypes.string,
	mark: PropTypes.number,
	comment: PropTypes.string,
	addAnswer: PropTypes.func,
};

/**
 *
 * @param dispatch
 * @returns {{addAnswer: (function(*=): *)}}
 */
const mapDispatch = dispatch => {
	return {
		addAnswer: answer => dispatch(addAnswer(answer)),
	};
};

export default connect(null, mapDispatch)(Item);