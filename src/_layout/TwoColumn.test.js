import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import {
	fetchDataError,
	fetchDataLoading,
	fetchDataSuccess,
} from "../_actions";
import { EMPLOYEE_ENTITY } from "../_store/entities";
import { employee, hr, supervisor } from "../_api/employee";
import createStore from "../_store";
import TwoColumn from "./TwoColumn";
import { createMemoryHistory } from "history";
import { ConnectedRouter } from "connected-react-router";

describe("Main Layout", () => {
	let store, props, history;

	/**
	 *
	 */
	beforeEach(() => {
		store = createStore({});

		history = createMemoryHistory();

		props = {
			location: {
				pathname: "/",
			},
			history,
		};
	});

	/**
	 *
	 */
	it("should render loading", () => {
		store.dispatch(fetchDataLoading(EMPLOYEE_ENTITY));

		const wrapper = mount(
			<Provider store={store}>
				<ConnectedRouter {...props}>
					<TwoColumn />
				</ConnectedRouter>
			</Provider>,
		);

		const sample = wrapper.exists(".loading");

		expect(sample).toBeTruthy();
	});

	/**
	 *
	 */
	it("should render error", () => {
		store.dispatch(fetchDataError(EMPLOYEE_ENTITY));

		const wrapper = mount(
			<Provider store={store}>
				<ConnectedRouter {...props}>
					<TwoColumn />
				</ConnectedRouter>
			</Provider>,
		);

		const sample = wrapper.exists(".error");

		expect(sample).toBeTruthy();
	});

	/**
	 *
	 */
	it("should render exception", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, undefined));

		const wrapper = mount(
			<Provider store={store}>
				<ConnectedRouter {...props}>
					<TwoColumn />
				</ConnectedRouter>
			</Provider>,
		);

		const sample = wrapper.exists(".oops");

		expect(sample).toBeTruthy();
	});

	/**
	 *
	 */
	it("should render content", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, employee));

		const wrapper = mount(
			<Provider store={store}>
				<ConnectedRouter {...props}>
					<TwoColumn />
				</ConnectedRouter>
			</Provider>,
		);

		const sample = wrapper.exists(".content");

		expect(sample).toBeTruthy();
	});
});
