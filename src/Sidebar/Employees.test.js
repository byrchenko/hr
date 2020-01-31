import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import Employees from "./Employees";
import divisions from "../_api/divisions";
import { employee, hr } from "../_api/employee";
import Item from "./Item";
import Employee from "./Employee";
import Sidebar from "./index";
import Modal from "../Modal";

describe("Employees side", () => {
	let store;

	/**
	 *
	 */
	const initialState = {
		divisions: {
			data: divisions,
			error: false,
			loading: false,
			sync: false,
		},
		employee: {
			data: hr,
			error: false,
			loading: false,
			sync: false,
		},
		changePosition: {
			newPosition: null,
			error: false,
			loading: false,
			sync: false,
		},
		router: {
			location: {
				search: "",
			},
		},
	};

	/**
	 *
	 */
	beforeEach(() => {
		const mockStore = configureStore([]);

		store = mockStore(initialState);
	});

	/**
	 *
	 */
	it("should render divisions and employees", () => {
		const wrapper = mount(
			<Provider store={store}>
				<Employees />
			</Provider>,
		);

		const divisionsCount = wrapper.find(Item).length;
		const employeesCount = wrapper.find(Employee).length;

		/**
		 * Two root items, and 3 children in opened by default first item
		 */
		expect(divisionsCount).toEqual(5);

		/**
		 * 3 employees in in first root item
		 */
		expect(employeesCount).toEqual(3);
	});
});
