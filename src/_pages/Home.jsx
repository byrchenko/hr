import React from "react";
import PropTypes from "prop-types";
import AssessmentTable from "../AssessmentTable";
import { connect } from "react-redux";
import { EMPLOYEE_PERMISSION, HR_PERMISSION, SUPERVISOR_PERMISSION } from "../_store/roles";

const permissions = [
	HR_PERMISSION,
	SUPERVISOR_PERMISSION,
	EMPLOYEE_PERMISSION
];

class Home extends React.Component {
	render() {
		const {role} = this.props;

		if (!role || !permissions.includes(role)) {
			return <div>Forbidden</div>
		}

		return (
			<AssessmentTable/>
		);
	}
}

const mapState = state => {
	const {
		employee: {
			data,
		},
	} = state;

	if (data === null) {
		return {
			role: null,
		};
	}

	const { role } = data;

	return {
		role,
	};
};


export default connect(mapState)(Home);