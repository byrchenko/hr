import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import text from "./locale/ru";
import { connect } from "react-redux";
import Plus from "../_svg/plus.svg";
import { HR_PERMISSION } from "../_store/roles";
import { openPopup } from "../_actions";
import { NEW_TASK_POPUP } from "../Popuper/popups";

export const label = {
	employee: "Сотрудник",
	supervisor: "Руководитель",
	hr: "Рекрутер",
};

/**
 *
 * @param role
 * @param path
 * @returns {null|*}
 */
function addTaskButton(role, path, openPopup) {
	if (role !== HR_PERMISSION || path !== "/hr/processing") {
		return null;
	}

	return (
		<div
			className={css.addTask}
			onClick={openPopup}
		>
			<Plus
				height={10}
				width={10}
				className={css.plus}
			/>

			<span>Создать оценивание</span>
		</div>
	);
}

/**
 *
 * @param role
 * @param path
 * @returns {null|*}
 * @constructor
 */
const PageTitle = ({ role, path, openPopup }) => {
	if (!role) {
		return null;
	}

	return (
		<div className={css.index}>
			<div className={css.wrapper}>
				<h2 className={css.title}>{text.title}</h2>

				<div className={css.label}>{label[role]}</div>
			</div>

			{addTaskButton(role, path, openPopup)}
		</div>
	);
};

/**
 *
 * @type {{path: *, role: *}}
 */
PageTitle.propTypes = {
	role: PropTypes.string,
	path: PropTypes.string,
	openPopup: PropTypes.func,
};

/**
 *
 * @param state
 * @returns {{role: *}|{role: null}}
 */
const mapState = state => {
	const {
		employee: { data },
		router: {
			location: {
				pathname
			}
		}
	} = state;

	if (data === null || data === undefined) {
		return {
			role: null,
		};
	}

	const { role } = data;

	return {
		role,
		path: pathname
	};
};

/**
 *
 * @param dispatch
 * @returns {{openPopup: (function(): *)}}
 */
const mapDispatch = dispatch => {
	return {
		openPopup: () => dispatch(openPopup(NEW_TASK_POPUP))
	}
};

export default connect(mapState, mapDispatch)(PageTitle);
