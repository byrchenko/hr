import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import Header from "./Header";
import Employee from "./Employee";
import List from "./List";
import {
	selectAssessmentData,
	selectAssessmentEmployee,
} from "../_dispatchers";
import { connect } from "react-redux";

/**
 *
 */
class AssessmentQuestions extends React.Component {
	render() {
		const { block, employee } = this.props;

		return (
			<div className={css.index}>
				<Header />

				<div className={css.content}>
					<Employee employee={employee} />

					<List data={block} />
				</div>
			</div>
		);
	}
}

/**
 *
 */
AssessmentQuestions.propTypes = {
	block: PropTypes.object,
	employee: PropTypes.object,
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
	};
};

export default connect(mapState)(AssessmentQuestions);
