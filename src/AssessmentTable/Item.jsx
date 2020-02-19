import React from "react";
import PropTypes from "prop-types";
import css from "./Item.scss";
import UserTitle from "./UserTitle";
import Status from "./Status";

/**
 *
 * @param item
 * @returns {*}
 * @constructor
 */
const Item = ({ item }) => {
	const {
		employee: {
			image,
			name,
			last_name: lastname,
			position,
			last_assessment_date: date,
		},
		status: {
			evaluating,
			evaluator,
			recruiter
		},
		role
	} = item;

	return (
		<>
			<div className={css.user}>
				<div className={css.picture}>
					<img src={image} alt={`${name} ${lastname}`} />
				</div>

				<div className={css.info}>
					<UserTitle
						name={name}
						lastname={lastname}
						date={date}
					/>

					<div className={css.position}>{position}</div>
				</div>
			</div>

			<Status
				assessment={item}
				role={role}
				user={item.employee}
				employee={evaluating}
				supervisor={evaluator}
				hr={recruiter}
			/>
		</>
	);
};

Item.propTypes = {
	item: PropTypes.object
};

export default Item;
