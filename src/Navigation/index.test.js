import React from "react";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import Navigation from "./index";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { createMemoryHistory } from "history";
import Item from "./Item";
import { Link } from "react-router-dom";
import { fetchDataSuccess } from "../_actions";
import { EMPLOYEE_ENTITY } from "../_store/entities";
import { employee, hr, supervisor } from "../_api/employee";
import createStore from "../_store";
import { HR_PERMISSION } from "../_store/roles";

describe("Navigation", () => {
	let store, history, props;

	/**
	 *
	 */
	beforeEach(() => {
		store = createStore({});
		history = createMemoryHistory();

		props = {
			action: "POP",
			location: {
				pathname: "/",
			},
			history,
		};
	});

	/**
	 *
	 */
	it("should show navigation for Employee", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, employee));

		const wrapper = mount(
			<Provider store={store}>
				<ConnectedRouter {...props}>
					<Navigation />
				</ConnectedRouter>
			</Provider>,
		);

		const quantity = wrapper.find(Item).length;

		expect(quantity).toEqual(1);
	});

	/**
	 *
	 */
	it("should show navigation for Supervisor", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, supervisor));

		const wrapper = mount(
			<Provider store={store}>
				<ConnectedRouter {...props}>
					<Navigation />
				</ConnectedRouter>
			</Provider>,
		);

		const quantity = wrapper.find(Item).length;

		expect(quantity).toEqual(1);
	});

	/**
	 *
	 */
	it("should show navigation for HR", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, hr));

		const wrapper = mount(
			<Provider store={store}>
				<ConnectedRouter {...props}>
					<Navigation />
				</ConnectedRouter>
			</Provider>,
		);

		const quantity = wrapper.find(Item).length;

		expect(quantity).toEqual(3);
	});
});
