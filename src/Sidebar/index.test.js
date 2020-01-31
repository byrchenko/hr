import React from "react";
import { Provider } from "react-redux";
import createStore from "../_store";
import assessmentEmployeesList from "../_api/assessmentEmployeesList";
import { employee, supervisor, hr } from "../_api/employee";
import { mount } from "enzyme";
import SidebarConnected from ".";
import { Sidebar } from ".";
import { fetchDataSuccess } from "../_actions";
import {
	DIVISIONS_ENTITY,
	EMPLOYEE_ENTITY,
} from "../_store/entities";
import Employees from "./Employees";
import divisions from "../_api/divisions";
import { SHOW_EMPLOYEES } from "./config";
import { Modal } from "../Modal";

describe("SidebarConnected", () => {
	/**
	 *
	 */
	describe("Permissions", () => {
		let store;

		beforeEach(() => {
			store = createStore({});
		});

		/**
		 *
		 */
		it("should show only user side for Employee role", () => {
			store.dispatch(
				fetchDataSuccess(EMPLOYEE_ENTITY, employee),
			);

			const wrapper = mount(
				<Provider store={store}>
					<SidebarConnected />
				</Provider>,
			);

			const button = wrapper.exists(".showStructure");
			const structure = wrapper.exists(Employees);

			expect(button).toBeFalsy();
			expect(structure).toBeFalsy();
		});

		/**
		 *
		 */
		it("should show user side and employees for Supervisor", () => {
			store.dispatch(
				fetchDataSuccess(EMPLOYEE_ENTITY, supervisor),
			);

			const wrapper = mount(
				<Provider store={store}>
					<SidebarConnected />
				</Provider>,
			);

			wrapper.find(Sidebar).setState({ side: SHOW_EMPLOYEES });

			const structure = wrapper.exists(Employees);

			expect(structure).toBeTruthy();
		});

		/**
		 *
		 */
		it("should show user info, structure and edit buttons for HR", () => {
			store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, hr));

			store.dispatch(
				fetchDataSuccess(DIVISIONS_ENTITY, divisions),
			);

			const wrapper = mount(
				<Provider store={store}>
					<SidebarConnected />
				</Provider>,
			);

			wrapper.find(Sidebar).setState({ side: SHOW_EMPLOYEES });

			const structure = wrapper.exists(Employees);

			expect(structure).toBeTruthy();
		});
	});
});
