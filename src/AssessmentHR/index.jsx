import React from "react";
import PropTypes from "prop-types";
import Users from "./Users";
import Wrapper from "./Wrapper";
import data from "../_api/assessmentHr";
import Blocks from "./Blocks";
import Block from "./Block";
import Question from "./Question";
import Questions from "./Questions";
import marks from "../AssessmentQuestions/marks";
import Mark from "../AssessmentQuestions/Mark";

class index extends React.Component {
	constructor(props) {
		super(props);
	}
	/**
	 *
	 */
	renderMark(mark) {
		return (
			<Mark
				key={mark.value}
				question={id}
				item={mark}
				selected={markValue}
				setMark={setMarkValue}
			/>
		);
	}

	/**
	 *
	 */
	renderMarks() {
		return () => {
			return marks.map(this.renderMark);
		};
	}

	/**
	 *
	 * @returns {function(): *}
	 */
	renderQuestion() {
		return question => {
			return <Question item={question} />;
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
			</Wrapper>
		);
	}
}

export default index;
