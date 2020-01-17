import React from "react";
import { Provider } from "react-redux";
import createStore from "../_store";
import { mount } from "enzyme";
import Title from ".";
import { fetchDataSuccess } from "../_actions";
import { EMPLOYEE_ENTITY } from "../_store/entities";
import { employee, supervisor, hr } from "../_api/employee";
import { label } from ".";

describe("", () => {
	let store;

	beforeEach(() => {
		store = createStore({});
	});

	/**
	 *
	 */
	it("should render employee label", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, employee));

		const wrapper = mount(
			<Provider store={store}>
				<Title />
			</Provider>,
		);

		expect(
			wrapper
				.find(".label")
				.at(0)
				.text(),
		).toEqual(label.employee);
	});

	/**
	 *
	 */
	it("should render supervisor label", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, supervisor));

		const wrapper = mount(
			<Provider store={store}>
				<Title />
			</Provider>,
		);

		expect(
			wrapper
				.find(".label")
				.at(0)
				.text(),
		).toEqual(label.supervisor);
	});

	/**
	 *
	 */
	it("should render hr label", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, hr));

		const wrapper = mount(
			<Provider store={store}>
				<Title />
			</Provider>,
		);

		expect(
			wrapper
				.find(".label")
				.at(0)
				.text(),
		).toEqual(label.hr);
	});

	/**
	 *
	 */
	it("should render null", () => {
		const wrapper = mount(
			<Provider store={store}>
				<Title />
			</Provider>,
		);

		expect(wrapper.exists(".label")).toBeFalsy();
	});
});
