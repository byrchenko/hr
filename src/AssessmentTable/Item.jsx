import React from "react";
import PropTypes from "prop-types";
import css from "./Item.scss";
import UserTitle from "./UserTitle";
import Status from "./Status";
import {
	HR_PERMISSION,
	SUPERVISOR_PERMISSION,
} from "../_store/roles";

const Item = ({ item, employee, supervisor, hr }) => {
	const {
		employee: {
			image,
			name,
			last_name: lastname,
			position,
			last_assessment_date: date,
		},
		employee_checked,
		supervisor_checked,
		hr_checked,
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
				user={item.employee}
				employee={employee_checked}
				supervisor={supervisor_checked}
				hr={hr_checked}
			/>
		</>
	);
};

Item.propTypes = {};

Item.defaultProps = {};

export default Item;
