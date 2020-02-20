import React from "react";
import PropTypes from "prop-types";
import css from "./Task.scss";
import DatePicker from "../Datepicker";
import Remove from "../_svg/remove.svg";
import Calendar from "../_svg/calendar.svg";

const Task = ({ item, remove, updateTitle, updateDate }) => {
	return (
		<div className={css.index}>
			<input
				type="text"
				className={css.title}
				onChange={e => updateTitle(item.id, e.target.value)}
				value={item.title}
			/>

			<div className={css.wrapper}>
				<DatePicker
					className={css.date}
					selected={item.date}
					onChange={date => updateDate(item.id, date)}
					dateFormat={"dd.MM.yyyy"}
				/>

				<Calendar
					width={14}
					height={13}
					className={css.calendar}
				/>
			</div>

			<div
				className={css.remove}
				onClick={() => remove(item.id)}
			>
				<Remove
					height={11}
					width={11}
				/>
			</div>
		</div>
	);
};

/**
 *
 */
Task.propTypes = {
	item: PropTypes.object,
	remove: PropTypes.func,
	updateTitle: PropTypes.func,
	updateDate: PropTypes.func,
};

export default Task;
