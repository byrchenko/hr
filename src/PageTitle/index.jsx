import React from "react";
import css from "./index.scss";
import text from "./locale/ru";
import { connect } from "react-redux";

export const label = {
	employee: "Сотрудник",
	supervisor: "Руководитель",
	hr: "Рекрутер",
};

const PageTitle = ({ role }) => {
	if (!role) {
		return null;
	}

	return (
		<div className={css.index}>
			<h2 className={css.title}>{text.title}</h2>

			<div className={css.label}>{label[role]}</div>
		</div>
	);
};

const mapState = state => {
	const {
		employee: { data },
	} = state;

	if (data === null || data === undefined) {
		return {
			role: null,
		};
	}

	const { role } = data;

	return {
		role,
	};
};

export default connect(mapState)(PageTitle);
