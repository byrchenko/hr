import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import { connect } from "react-redux";
import {
	dataPopup,
	employeeDataPopup, getPopupParams,
	isLoadingPopup,
	positionDataPopup,
	shownPopup,
} from "../_dispatchers";
import { Modal } from "../Modal";
import {
	CHANGE_POSITION_POPUP,
	ADD_COMPETENCY_POPUP,
	EDIT_COMPETENCY_POPUP,
	EDIT_POSITION_POPUP,
	ADD_POSITION_POPUP,
	EDIT_BLOCK_POPUP,
	ADD_BLOCK_POPUP, NEW_TASK_POPUP,
} from "./popups";
import text from "./locale/ru";
import ApiInterface from "../_service/ApiMethods";
import ModalContent from "../Sidebar/ModalContent";
import SettingsPopup from "../AssessmentSettings/Popup";
import Task from "./Task";
import { closePopup } from "../_actions";
import { changePosition } from "../_actions/popups";


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
				loading={loading}
			>
				<ModalContent
					handleSubmit={changeEmployeePosition}
					type={CHANGE_POSITION_POPUP}
				/>
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

		return (
			<Modal
				type={ADD_COMPETENCY_POPUP}
				title={"Добавить компетенцию"}
			>
				<SettingsPopup
					type={ADD_COMPETENCY_POPUP}
				/>
			</Modal>
		);
	}

	/**
	 *
	 */
	editCompetencyPopup() {
		const { show, params } = this.props;

		if (show !== EDIT_COMPETENCY_POPUP) {
			return null;
		}

		return (
			<Modal
				type={EDIT_COMPETENCY_POPUP}
				title={"Редактировать компетенцию"}
			>
				<SettingsPopup
					type={EDIT_COMPETENCY_POPUP}
					params={params}
				/>
			</Modal>
		);
	}

	/**
	 *
	 */
	addPositionPopup() {
		const { show } = this.props;

		if (show !== ADD_POSITION_POPUP) {
			return null;
		}

		return (
			<Modal
				type={ADD_POSITION_POPUP}
				title={"Добавить должность"}
			>
				<SettingsPopup
					type={ADD_POSITION_POPUP}
				/>
			</Modal>
		);
	}

	/**
	 *
	 */
	editPositionPopup() {
		const { show, params } = this.props;

		if (show !== EDIT_POSITION_POPUP) {
			return null;
		}

		return (
			<Modal
				type={EDIT_POSITION_POPUP}
				title={"Редактировать должность"}
			>
				<SettingsPopup
					type={EDIT_POSITION_POPUP}
					params={params}
				/>
			</Modal>
		);
	}


	/**
	 *
	 */
	addBlockPopup() {
		const { show } = this.props;

		if (show !== ADD_BLOCK_POPUP) {
			return null;
		}

		return (
			<Modal
				type={ADD_BLOCK_POPUP}
				title={"Добавить блок"}
			>
				<SettingsPopup
					type={ADD_BLOCK_POPUP}
				/>
			</Modal>
		);
	}

	/**
	 *
	 */
	editBlockPopup() {
		const { show, params } = this.props;

		if (show !== EDIT_BLOCK_POPUP) {
			return null;
		}

		return (
			<Modal
				type={EDIT_BLOCK_POPUP}
				title={"Редактировать блок"}
			>
				<SettingsPopup
					type={EDIT_BLOCK_POPUP}
					params={params}
				/>
			</Modal>
		);
	}

	/**
	 *
	 */
	newTaskPopup() {
		const { show, params, closePopup } = this.props;

		if (show !== NEW_TASK_POPUP) {
			return null;
		}

		return (
			<Task
				closePopup={() => closePopup(NEW_TASK_POPUP)}
			/>
		);
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		return (
			this.changePositionPopup() ||
			this.addCompetencyPopup() ||
			this.editCompetencyPopup() ||
			this.addPositionPopup() ||
			this.editPositionPopup() ||
			this.addBlockPopup() ||
			this.editBlockPopup() ||
			this.newTaskPopup()
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
	closePopup: PropTypes.func,
	params: PropTypes.object,
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
		params: getPopupParams(state),
	};
};

/**
 *
 * @param dispatch
 */
const mapDispatch = dispatch => {
	return {
		changePosition: (employee, position) =>
			dispatch(changePosition(
				employee,
				position,
			)),
		closePopup: type => dispatch(closePopup(type)),
	};
};

/**
 *
 * @param stateProps
 * @param dispatchProps
 * @returns {{}}
 */
const mergeProps = (stateProps, dispatchProps) => {
	const { employee, show, loading, position, params } = stateProps;
	const { changePosition, closePopup } = dispatchProps;

	return {
		changeEmployeePosition: () => changePosition(employee, position),
		show,
		loading,
		params,
		closePopup,
	};
};

export default connect(mapState, mapDispatch, mergeProps)(Popuper);
