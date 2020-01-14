import React from "react";
import PropTypes from "prop-types";
import css from "./Item.scss";

const Item = ({item, employeeStatus, supervisorStatus, hrStatus}) => {

	return (
		<div className={css.index}>
			<div className={css.user}>
				<div className={css.picture}>
					<img src="https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt={`${item.name} ${item.last_name}`} />
				</div>

				<div className={css.info}>
					<div className={css.name}>
						{`${item.name} ${item.last_name}`}

						<span className={css.date}>
							{`(${item.last_assessment_date})`}
						</span>
					</div>

					<div className={css.position}>
						{item.position}
					</div>
				</div>
			</div>

			<div className={css.status}>
				{employeeStatus(item.employee_checked)}
			</div>

			<div className={css.status}>
				{supervisorStatus(item.supervisor_checked)}
			</div>

			<div className={css.status}>
				{hrStatus(item.hr_checked)}
			</div>
		</div>
	);
};

Item.propTypes = {};

Item.defaultProps = {};

export default Item;