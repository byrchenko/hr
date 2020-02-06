import React from "react";
import { mount } from "enzyme";
import Controller from "./Controller";
import { Provider } from "react-redux";
import createStore from "../_store";
import { fetchDataSuccess } from "../_actions";
import { EMPLOYEE_ENTITY } from "../_store/entities";
import { EMPLOYEE_PERMISSION, HR_PERMISSION } from "../_store/roles";
import { employee, hr } from "../_api/employee";

describe("Permission controller", () => {
	let store;

	/**
	 *
	 */
	beforeEach(() => {
		store = createStore({});
	});

	/**
	 *
	 */
	it("should render, user is in allowed", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, employee));

		const wrapper = mount(
			<Provider store={store}>
				<Controller allowed={[EMPLOYEE_PERMISSION]}>
					<div className="content">Content</div>
				</Controller>
			</Provider>,
		);

		const sample = wrapper.exists(".content");

		expect(sample).toBeTruthy();
	});

	/**
	 *
	 */
	it("should NOT render, user not in allowed", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, employee));

		const wrapper = mount(
			<Provider store={store}>
				<Controller allowed={[HR_PERMISSION]}>
					<div className="content">Content</div>
				</Controller>
			</Provider>,
		);

		const sample = wrapper.exists(".content");

		expect(sample).toBeFalsy();
	});

	/**
	 *
	 */
	it("should render, user is not in disallowed", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, employee));

		const wrapper = mount(
			<Provider store={store}>
				<Controller disallowed={[HR_PERMISSION]}>
					<div className="content">Content</div>
				</Controller>
			</Provider>,
		);

		const sample = wrapper.exists(".content");

		expect(sample).toBeTruthy();
	});

	/**
	 *
	 */
	it("should NOT render, user is in disallowed", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, employee));

		const wrapper = mount(
			<Provider store={store}>
				<Controller disallowed={[EMPLOYEE_PERMISSION]}>
					<div className="content">Content</div>
				</Controller>
			</Provider>,
		);

		const sample = wrapper.exists(".content");

		expect(sample).toBeFalsy();
	});

	/**
	 *
	 */
	it("should render, no allowed or disallowed", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, employee));

		const wrapper = mount(
			<Provider store={store}>
				<Controller>
					<div className="content">Content</div>
				</Controller>
			</Provider>,
		);

		const sample = wrapper.exists(".content");

		expect(sample).toBeTruthy();
	});
});
