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
 * @param initialMark
 * @param initialComment
 * @param addAnswer
 * @returns {*}
 * @constructor
 */
const Item = ({
	id,
	title,
	description,
	initialMark,
	initialComment,
	addAnswer,
}) => {
	const [commentValue, setCommentValue] = React.useState(
		initialComment,
	);
	const [markValue, setMarkValue] = React.useState(initialMark);

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
	}, [commentValue, markValue]);

	/**
	 *
	 */
	const renderMark = mark => {
		return (
			<Mark
				key={mark.value}
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
				value={commentValue ? commentValue : ""}
			/>
		</div>
	);
};

/**
 *
 */
Item.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	description: PropTypes.string,
	initialMark: PropTypes.number,
	initialComment: PropTypes.string,
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
