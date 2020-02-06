import React from "react";
import Table from ".";
import Item from "./Item";
import { Provider } from "react-redux";
import createStore from "../_store";
import { mount } from "enzyme";
import {
	fetchDataError,
	fetchDataLoading,
	fetchDataSuccess,
} from "../_actions";
import {
	ASSESSMENT_TABLE_ENTITY,
	EMPLOYEE_ENTITY,
} from "../_store/entities";
import assessmentEmployeesList from "../_api/assessmentEmployeesList";
import { employee, supervisor, hr } from "../_api/employee";

/**
 *
 */
describe("", () => {
	let store = null;
	/**
	 *
	 */
	beforeEach(() => {
		store = createStore({});

		store.dispatch(
			fetchDataSuccess(
				ASSESSMENT_TABLE_ENTITY,
				assessmentEmployeesList,
			),
		);
	});

	/**
	 *
	 */
	it("should render 3 users waiting for assessment", () => {
		const wrapper = mount(
			<Provider store={store}>
				<Table />
			</Provider>,
		);

		expect(wrapper.find(Item).length).toEqual(3);
	});

	/**
	 *
	 */
	it("should render 2 buttons for assessment (employee)", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, employee));

		const wrapper = mount(
			<Provider store={store}>
				<Table />
			</Provider>,
		);

		expect(wrapper.find(".estimate").length).toEqual(2);
	});

	/**
	 *
	 */
	it("should render 2 buttons for assessment (supervisor)", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, supervisor));

		const wrapper = mount(
			<Provider store={store}>
				<Table />
			</Provider>,
		);

		expect(wrapper.find(".estimate").length).toEqual(2);
	});

	/**
	 *
	 */
	it("should render 2 hr buttons for creating event", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, hr));

		const wrapper = mount(
			<Provider store={store}>
				<Table />
			</Provider>,
		);

		expect(wrapper.find(".meeting").length).toEqual(2);
	});
});

describe("Handling module state", () => {
	let store = null;

	beforeEach(() => {
		store = createStore({});
	});

	/**
	 *
	 */
	it("should render preloader", () => {
		store.dispatch(fetchDataLoading(ASSESSMENT_TABLE_ENTITY));

		const wrapper = mount(
			<Provider store={store}>
				<Table />
			</Provider>,
		);

		expect(wrapper.exists(".loading")).toBeTruthy();
	});

	/**
	 *
	 */
	it("should render error page", () => {
		store.dispatch(fetchDataError(ASSESSMENT_TABLE_ENTITY));

		const wrapper = mount(
			<Provider store={store}>
				<Table />
			</Provider>,
		);

		expect(wrapper.exists(".error")).toBeTruthy();
	});

	/**
	 *
	 */
	it("should render empty list page", () => {
		const wrapper = mount(
			<Provider store={store}>
				<Table />
			</Provider>,
		);

		expect(wrapper.exists(".empty")).toBeTruthy();
	});
});
