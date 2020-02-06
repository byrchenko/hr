import React from "react";
import { Provider } from "react-redux";
import createStore from "../_store";
import { mount } from "enzyme";
import { Sidebar } from "./index";
import { SHOW_EMPLOYEES } from "./config";
import { Employee } from "./Employee";
import Item from "./Item";
import { fetchDataSuccess } from "../_actions";
import {
	DIVISIONS_ENTITY,
	EMPLOYEE_ENTITY,
} from "../_store/entities";
import { hr } from "../_api/employee";
import divisions from "../_api/divisions";

describe("", () => {
	let store;

	beforeEach(() => {
		store = createStore({});
	});

	/**
	 *
	 */
	it("should show content", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, hr));
		store.dispatch(fetchDataSuccess(DIVISIONS_ENTITY, divisions));

		const wrapper = mount(
			<Provider store={store}>
				<Sidebar />
			</Provider>,
		);

		wrapper.find(Sidebar).setState({ side: SHOW_EMPLOYEES });

		const item = wrapper.find(Item).at(1);

		const header = item.find("header");

		header.simulate("click");

		expect(item.contains(Employee)).toBeTruthy();
	});
});
