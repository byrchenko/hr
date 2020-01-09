import React from "react";
import PropTypes from "prop-types";
import css from "./User.scss";
import ArrowLeft from "../_svg/arr-l.svg";
import text from "./locale/ru";

const User = ({showEmployees}) => {

	return (
		<div className={css.index}>
			<div
				className={css.button}
				onClick={showEmployees}
				title={text.showEmployees}
			>
				<ArrowLeft />

				<span className={css.text}>
					{text.showEmployees}
				</span>
			</div>

			<div className={css.main}>
				<div className={css.picture}>
					<img
						src="https://econet.ru/uploads/pictures/41043/content_tumblr_mp8ff5cucq1rqjv1uo1_1280.jpg"
						alt={"Firstname Lastname"}
						title={"Firstname Lastname"}
					/>
				</div>

				<div className={css.fullname}>
					<h3 className={css.name}>
						{'Firstname'}
					</h3>

					<h3 className={css.name}>
						{'Lastname'}
					</h3>
				</div>
			</div>

			<div className={css.info}>
				<h5 className={css.title}>{text.division}</h5>
				<h3 className={css.descr}>{"Ассортимент"}</h3>
			</div>

			<div className={css.info}>
				<h5 className={css.title}>{text.position}</h5>
				<h3 className={css.descr}>{"Менеджер по работе с ассортиментом"}</h3>
			</div>

			<div className={css.info}>
				<h5 className={css.title}>{text.lastAssessment}</h5>
				<h3 className={css.descr}>{"21.12.2018"}</h3>
			</div>
		</div>
	);
};

User.propTypes = {};

User.defaultProps = {};

export default User;