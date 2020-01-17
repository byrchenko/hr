import React from "react";
import css from "./UserTitle.scss";

const UserTitle = ({name, lastname, date}) => {

	return (
		<div className={css.name}>
			{`${name} ${lastname}`}

			<span className={css.date}>
				{`(${date})`}
			</span>
		</div>
	);
};

export default UserTitle;