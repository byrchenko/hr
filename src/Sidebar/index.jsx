import React from "react";
import PropTypes from "prop-types";
import { SHOW_USER, SHOW_EMPLOYEES } from "./config";
import User from "./User";
import Employees from "./Employees";
import { connect } from "react-redux";
import {
	HR_PERMISSION,
	SUPERVISOR_PERMISSION,
} from "../_store/roles";
import PermissionController from "../_permissions/Controller";
import Modal from "../Modal";
import text from "./locale/ru";
import queryString from "query-string";
import ModalContent from "./ModalContent";
import {
	changePosition,
	locationSearch,
	role,
} from "../_dispatchers";
import css from "./index.scss";
import ApiInterface from "../_service/ApiInterface";
import { AnimatePresence } from "framer-motion";
import Appear from "../_transitions/Appear";

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
		const { role } = this.props;

		if (side === SHOW_EMPLOYEES) {
			return (
				<PermissionController
					allowed={[HR_PERMISSION, SUPERVISOR_PERMISSION]}
				>
					<Employees />
				</PermissionController>
			);
		}

		return <User changeSide={this.changeSide()} role={role} />;
	}

	/**
	 *
	 */
	isModal() {
		const { search } = this.props;

		const parsed = queryString.parse(search);

		return Object.prototype.hasOwnProperty.call(
			parsed,
			"change_position",
		);
	}

	/**
	 *
	 */
	changePosition() {
		return () => {
			const {
				newPosition,
				sendNewPosition,
				search,
			} = this.props;

			const parsed = queryString.parse(search);

			sendNewPosition(newPosition, parsed.change_position);
		};
	}

	/**
	 *
	 */
	renderModal() {
		const {
			changePositionLoading,
			changePositionSync,
			changePositionError,
		} = this.props;

		if (!this.isModal()) {
			return null;
		}

		return (
			<Modal
				title={text.changePosition}
				submitAction={this.changePosition()}
				submitText={text.changePositionBtn}
				loading={changePositionLoading}
				approved={changePositionSync}
			>
				<ModalContent error={changePositionError} />
			</Modal>
		);
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<div className={css.index}>
				{this.renderSide()}

				<AnimatePresence>
					{this.renderModal()}
				</AnimatePresence>
			</div>
		);
	}
}

/**
 *
 */
Sidebar.propTypes = {
	role: PropTypes.string,
	search: PropTypes.string,
	changePositionUser: PropTypes.string,
	changePositionLoading: PropTypes.bool,
	changePositionSync: PropTypes.bool,
	changePositionError: PropTypes.bool,
	newPosition: PropTypes.number,
	sendNewPosition: PropTypes.func,
};

/**
 *
 * @param state
 * @returns {{role: *}}
 */
const mapState = state => {
	const { loading, sync, error, newPosition } = changePosition(
		state,
	);

	return {
		role: role(state),
		search: locationSearch(state),
		changePositionLoading: loading,
		changePositionSync: sync,
		changePositionError: error,
		newPosition,
	};
};

/**
 *
 * @param dispatch
 * @returns {{sendNewPosition: void}}
 */
const mapDispatch = dispatch => {
	return {
		sendNewPosition: (position, user) =>
			ApiInterface.changeUserPosition(dispatch, position, user),
	};
};

export default connect(mapState, mapDispatch)(Sidebar);
