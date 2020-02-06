import React from "react";
import PropTypes from "prop-types";
import AssessmentTable from "../AssessmentTable";
import { connect } from "react-redux";
import {
	EMPLOYEE_PERMISSION,
	HR_PERMISSION,
	SUPERVISOR_PERMISSION,
} from "../_store/roles";
import { isStartedAssessment, role } from "../_dispatchers";
import AssessmentQuestions from "../AssessmentQuestions";

const permissions = [
	HR_PERMISSION,
	SUPERVISOR_PERMISSION,
	EMPLOYEE_PERMISSION,
];

/**
 *
 */
class Home extends React.Component {
	render() {
		const { role, isStartedAssessment } = this.props;

		if (!role || !permissions.includes(role)) {
			return <div>Forbidden</div>;
		}

		if (isStartedAssessment) {
			return <AssessmentQuestions />;
		}

		return <AssessmentTable />;
	}
}

/**
 *
 */
Home.propTypes = {
	role: PropTypes.string,
	isStartedAssessment: PropTypes.bool,
};

/**
 *
 * @param state
 * @returns {{role: *}}
 */
const mapState = state => {
	return {
		role: role(state),
		isStartedAssessment: isStartedAssessment(state),
	};
};

export default connect(mapState)(Home);
