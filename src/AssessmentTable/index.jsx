import React from "react";
import PropTypes from "prop-types";
import Wrapper from "./Wrapper";
import List from "./List";
import Item from "./Item";
import { EMPLOYEE_PERMISSION, HR_PERMISSION, SUPERVISOR_PERMISSION } from "../_store/roles";
import Button from "./Button";

class index extends React.Component {

	/**
	 *
	 * @param item
	 * @returns {*}
	 */
	renderItem(item) {
		const {role = HR_PERMISSION} = this.props;

		return (
			<Item
				item={{
					id: 1,
					name: "Василий",
					last_name: "Уткин",
					position: "Manager",
					employee_checked: true,
					supervisor_checked: false,
					hr_checked: false,
					last_assessment_date: "21.12.2018"
				}}
				supervisorStatus={this.renderSupervisorStatus(role)}
				employeeStatus={this.renderEmployeeStatus(role)}
				hrStatus={this.renderHrStatus(role)}
				key={item.id}
			/>
		)
	}

	/**
	 *
	 * @returns {unknown[]}
	 */
	renderList(list) {
		if(!list) {
			return null;
		}

		return list.map(this.renderItem, this)
	}

	/**
	 *
	 * @param role
	 * @returns {function(...[*]=)}
	 */
	renderSupervisorStatus(role) {
		return isChecked => {
			if (isChecked) {
				return <Button type="complete" />
			} else if (!isChecked && role === SUPERVISOR_PERMISSION) {
				return <Button type="estimate" />
			}

			return <Button type="waiting" />
		}
	}

	/**
	 *
	 * @param role
	 * @returns {function(...[*]=)}
	 */
	renderEmployeeStatus(role) {
		return isChecked => {
			if (isChecked) {
				return <Button type="complete" />
			} else if (!isChecked && role === EMPLOYEE_PERMISSION) {
				return <Button type="estimate" />
			}

			return <Button type="waiting" />
		}
	}

	/**
	 *
	 * @param role
	 * @returns {function(...[*]=)}
	 */
	renderHrStatus(role) {
		return isChecked => {
			if (isChecked) {
				return <Button type="complete" />
			} else if (!isChecked && role === HR_PERMISSION) {
				return <Button type="meeting" />
			}

			return <Button type="waiting" />
		}
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const {list = [1,2,3,4]} = this.props;

		return (
			<Wrapper list={list}>
				<List>
					{this.renderList(list)}
				</List>
			</Wrapper>
		);
	}
}

export default index;