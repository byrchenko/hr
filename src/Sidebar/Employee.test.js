import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import SidebarConnect from "./index";
import Employee from "./Employee";
import { applyMiddleware, createStore } from "redux";
import reducers from "../_store/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import { createMemoryHistory } from "history";
import { fetchDataSuccess } from "../_actions";
import {
	DIVISIONS_ENTITY,
	EMPLOYEE_ENTITY,
} from "../_store/entities";
import { hr, supervisor } from "../_api/employee";
import divisions from "../_api/divisions";
import { ConnectedRouter } from "connected-react-router";
import { SHOW_EMPLOYEES } from "./config";
import { Sidebar } from ".";
import Modal from "../Modal";
import Edit from "../_svg/edit.svg";

/**
 *
 */
describe("", () => {
	let store, history, props;

	/**
	 *
	 */
	beforeEach(() => {
		history = createMemoryHistory();

		props = {
			action: "POP",
			location: {
				pathname: "/path/to/somewhere",
			},
			history,
		};

		store = createStore(
			reducers(history),
			{},
			composeWithDevTools(
				applyMiddleware(routerMiddleware(history)),
			),
		);

		/**
		 * Init actions
		 */
		store.dispatch(fetchDataSuccess(DIVISIONS_ENTITY, divisions));
	});

	/**
	 *
	 */
	it("should open modal", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, hr));

		const wrapper = mount(
			<Provider store={store}>
				<ConnectedRouter {...props}>
					<SidebarConnect />
				</ConnectedRouter>
			</Provider>,
		);

		wrapper.find(Sidebar).setState({ side: SHOW_EMPLOYEES });

		const employee = wrapper.find(Employee).at(0);

		employee.simulate("click");

		const isModal = wrapper.find(Modal).exists();

		expect(isModal).toBeTruthy();
	});

	/**
	 *
	 */
	it("should NOT open modal (permission control)", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, supervisor));

		const wrapper = mount(
			<Provider store={store}>
				<ConnectedRouter {...props}>
					<SidebarConnect />
				</ConnectedRouter>
			</Provider>,
		);

		wrapper.find(Sidebar).setState({ side: SHOW_EMPLOYEES });

		const employee = wrapper.find(Employee).at(0);

		employee.simulate("click");

		const isModal = wrapper.find(Modal).exists();

		expect(isModal).toBeFalsy();
	});

	/**
	 *
	 */
	it("should render edit icon", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, hr));
		const wrapper = mount(
			<Provider store={store}>
				<ConnectedRouter {...props}>
					<SidebarConnect />
				</ConnectedRouter>
			</Provider>,
		);

		wrapper.find(Sidebar).setState({ side: SHOW_EMPLOYEES });

		const employee = wrapper.find(Employee).at(0);

		expect(employee.exists(Edit)).toBeTruthy();
	});

	/**
	 *
	 */
	it("should render edit icon (permission control)", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, supervisor));
		const wrapper = mount(
			<Provider store={store}>
				<ConnectedRouter {...props}>
					<SidebarConnect />
				</ConnectedRouter>
			</Provider>,
		);

		wrapper.find(Sidebar).setState({ side: SHOW_EMPLOYEES });

		const employee = wrapper.find(Employee).at(0);

		expect(employee.exists(Edit)).toBeFalsy();
	});
});
