import React from "react";
import PropTypes from "prop-types";
import { SHOW_USER, SHOW_EMPLOYEES } from "./config";
import { connect } from "react-redux";
import { role } from "../_dispatchers";
import User from "./User";
import Employees from "./Employees";
import PermissionController from "../_permissions/Controller";
import css from "./index.scss";

import {
	HR_PERMISSION,
	SUPERVISOR_PERMISSION,
} from "../_store/roles";

/**
 *
 */
export class Sidebar extends React.Component {
	/**
	 *
	 * @param props
	 */
	constructor(props) {
		super(props);

		this.state = {
			side: SHOW_USER,
		};
	}

	/**
	 *
	 */
	changeSide() {
		return () => {
			this.setState({ side: SHOW_EMPLOYEES });
		};
	}

	/**
	 *
	 * @returns {*}
	 */
	renderSide() {
		const { side } = this.state;

		if (side === SHOW_EMPLOYEES) {
			return (
				<PermissionController
					allowed={[HR_PERMISSION, SUPERVISOR_PERMISSION]}
				>
					<Employees />
				</PermissionController>
			);
		}

		return <User changeSide={this.changeSide()} />;
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		return <div className={css.index}>{this.renderSide()}</div>;
	}
}

/**
 *
 */
Sidebar.propTypes = {
	role: PropTypes.string,
};

/**
 *
 * @param state
 * @returns {{role: *}}
 */
const mapState = state => {
	return {
		role: role(state),
	};
};

export default connect(mapState)(Sidebar);
