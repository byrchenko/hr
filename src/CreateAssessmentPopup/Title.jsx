import React from "react";
import PropTypes from "prop-types";
import css from "./Title.scss";

const Title = ({title, setTitle}) => {
	return (
		<>
			<h3 className={css.title}>
				Новая оценка
			</h3>

			<div className={css.taskname}>
				<input
					placeholder="Введите название оценки"
					type="text"
					value={title ? title : ""}
					onChange={setTitle}
				/>
			</div>
		</>
	);
};

/**
 *
 */
Title.propTypes = {
	title: PropTypes.string,
	setTitle: PropTypes.func
};

export default Title;