import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
	dataPopup,
	employeeDataPopup,
	isLoadingPopup,
	positionDataPopup,
	shownPopup,
} from "../_dispatchers";
import { Modal } from "../Modal";
import {
	CHANGE_POSITION_POPUP,
	ADD_COMPETENCY_POPUP,
} from "./popups";
import text from "./locale/ru";
import ApiInterface from "../_service/ApiInterface";
import ModalContent from "../Sidebar/ModalContent";

/**
 *
 */
class Popuper extends React.Component {
	/**
	 *
	 */
	changePositionPopup() {
		const { show, loading, changeEmployeePosition } = this.props;

		if (show !== CHANGE_POSITION_POPUP) {
			return null;
		}

		return (
			<Modal
				type={CHANGE_POSITION_POPUP}
				title={text.changePositionTitle}
				onSubmit={changeEmployeePosition}
				loading={loading}
			>
				<ModalContent />
			</Modal>
		);
	}

	/**
	 *
	 */
	addCompetencyPopup() {
		const { show } = this.props;

		if (show !== ADD_COMPETENCY_POPUP) {
			return null;
		}

		return <Modal>{"some content here"}</Modal>;
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		return (
			this.changePositionPopup() || this.addCompetencyPopup()
		);
	}
}

/**
 *
 */
Popuper.propTypes = {
	employee: PropTypes.number,
	loading: PropTypes.bool,
	show: PropTypes.string,
	changeEmployeePosition: PropTypes.func,
};

/**
 *
 * @param state
 */
const mapState = state => {
	return {
		show: shownPopup(state),
		loading: isLoadingPopup(state),
		employee: employeeDataPopup(state),
		position: positionDataPopup(state),
	};
};

/**
 *
 * @param dispatch
 */
const mapDispatch = dispatch => {
	return {
		changePosition: (employee, position) =>
			ApiInterface.changeUserPosition(
				dispatch,
				employee,
				position,
			),
	};
};

/**
 *
 * @param stateProps
 * @param dispatchProps
 * @returns {{}}
 */
const mergeProps = (stateProps, dispatchProps) => {
	const { employee, show, loading, position } = stateProps;
	const { changePosition } = dispatchProps;

	return {
		changeEmployeePosition: changePosition(employee, position),
		show,
		loading,
	};
};

export default connect(mapState, mapDispatch, mergeProps)(Popuper);
