import React from "react";
import PropTypes from "prop-types";
import css from "./List.scss";

const List = ({children}) => {
	return (
		<div className={css.index}>
			<div className={css.status}>
				Информация о сотруднике
			</div>

			<div className={css.status}>
				Оценка руководителя
			</div>

			<div className={css.status}>
				Оценка сотрудника
			</div>

			<div className={css.status}>
				Оценка рекрутера
			</div>

			{children}
		</div>
	);
};

List.propTypes = {};

List.defaultProps = {};

export default List;