import React from "react";
import PropTypes from "prop-types";
import css from "./Buttons.scss";

const Buttons = ({cancel, submit, isEditing }) => {
	return (
		<div className={css.buttons}>
			<div
				className={css.submit}
				onClick={submit}
			>
				{
					isEditing
						? "Закончить редактирование"
						: "Запустить оценивание"
				}
			</div>

			<div
				className={css.cancel}
				onClick={cancel}
			>
				Отмена
			</div>
		</div>
	);
};

/**
 *
 */
Buttons.propTypes = {
	cancel: PropTypes.func,
	submit: PropTypes.func,
	isEditing: PropTypes.bool,
};

export default Buttons;