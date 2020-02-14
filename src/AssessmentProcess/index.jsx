import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import SelectUserInput from "../SelectUserInput";
import { employee, hr, supervisor } from "../_api/employee";

class index extends React.Component {

	render() {
		return (
			<div className={css.index}>
				<SelectUserInput list={[employee, hr, supervisor]}/>
			</div>
		);
	}
}

export default index;