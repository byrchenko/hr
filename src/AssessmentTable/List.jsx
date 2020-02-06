import React from "react";
import css from "./List.scss";
import Item from "./Item";

const List = ({ list }) => {
	/**
	 *
	 * @param item
	 * @returns {*}
	 */
	function renderItem(item) {
		const {
			employee,
			hr_checked,
			employee_checked,
			supervisor_checked,
		} = item;

		return <Item item={item} key={item.id} />;
	}
	/**
	 *
	 * @returns {unknown[]}
	 */
	function renderList(list) {
		return list.map(renderItem);
	}

	/**
	 *
	 */
	return (
		<div className={css.index}>
			<div className={css.status}>Информация о сотруднике</div>

			<div className={css.status}>Оценка руководителя</div>

			<div className={css.status}>Оценка сотрудника</div>

			<div className={css.status}>Оценка рекрутера</div>

			{renderList(list)}
		</div>
	);
};

export default List;
