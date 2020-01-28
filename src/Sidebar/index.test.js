import React from "react";
import { Provider } from "react-redux";
import createStore from "../_store";
import assessmentEmployeesList from "../_api/assessmentEmployeesList";
import { employee, supervisor, hr } from "../_api/employee";
import { mount } from "enzyme";
import Sidebar from ".";
import { fetchDataSuccess } from "../_actions";
import {
	DIVISIONS_ENTITY,
	EMPLOYEE_ENTITY,
} from "../_store/entities";
import Employees from "./Employees";
import divisions from "../_api/divisions";

describe("Sidebar", () => {
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
		it("should show only user info for Employee role", () => {
			store.dispatch(
				fetchDataSuccess(EMPLOYEE_ENTITY, employee),
			);

			const wrapper = mount(
				<Provider store={store}>
					<Sidebar />
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
		it("should show user info and company structure for Supervisor", () => {
			store.dispatch(
				fetchDataSuccess(EMPLOYEE_ENTITY, supervisor),
			);

			const wrapper = mount(
				<Provider store={store}>
					<Sidebar />
				</Provider>,
			);

			const button = wrapper
				.find(".showStructure")
				.simulate("click");

			const structure = wrapper.exists(Employees);
			const editBtns = wrapper.find(".editPosition");

			expect(structure).toBeTruthy();
			expect(editBtns.length).toBe(0);
		});

		/**
		 *
		 */
		it("should show user info, structure and edit buttons for HR", () => {
			store.dispatch(
				fetchDataSuccess(EMPLOYEE_ENTITY, supervisor),
			);

			store.dispatch(
				fetchDataSuccess(DIVISIONS_ENTITY, divisions),
			);

			const wrapper = mount(
				<Provider store={store}>
					<Sidebar />
				</Provider>,
			);

			const button = wrapper
				.find(".showStructure")
				.simulate("click");

			const structure = wrapper.exists(Employees);
			const editBtns = wrapper.find(".editPosition");

			expect(structure).toBeTruthy();
			expect(editBtns.length).toBeGreaterThan(0);
		});
	});
});
