import React from "react";
import PropTypes from "prop-types";
import css from "./Users.scss";

const config = {
	hr: "Рекрутер",
	employee: "Сотрудник",
	supervisor: "Руководитель",
	null: 'Пользователь'
};

const Users = ({ evaluator, evaluated, finalizer }) => {

	/**
	 *
	 * @returns {*}
	 */
	const renderUser = user => {
		if (!user) {
			return (
				<div className={css.empty}>No user info</div>
			)
		}

		const { name, last_name, image, position, role } = user;

		const fullName = `${name} ${last_name}`;

		return (
			<div className={css.user}>
				<h3 className={css.title}>
					{config[role]}
				</h3>

				<div className={css.item}>
					<div className={css.picture}>
						<img
							src={image}
							alt={fullName}
							onError={() => console.log('Error with image', image)}
						/>
					</div>

					<div className={css.info}>
						<div className={css.name}>
							{fullName}
						</div>

						<div className={css.position}>
							{position}
						</div>
					</div>
				</div>
			</div>
		);
	};

	/**
	 *
	 */
	return (
		<div className={css.index}>
			{renderUser(evaluated)}

			{renderUser(evaluator)}

			{renderUser(finalizer)}
		</div>
	);
};

Users.propTypes = {
	evaluator: PropTypes.object,
	evaluated: PropTypes.object,
	finalizer: PropTypes.object,
};

export default Users;
