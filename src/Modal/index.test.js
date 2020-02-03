import React from "react";
import { Provider } from "react-redux";
import createStore from "../_store";
import { mount } from "enzyme";
import Modal from ".";
import { locationSearch } from "../_dispatchers";
import { push } from "connected-react-router";
import { fetchDataSuccess } from "../_actions";
import { EMPLOYEE_ENTITY } from "../_store/entities";
import { employee } from "../_api/employee";
import configureStore from "redux-mock-store";
import { CHANGE_POSITION_POPUP } from "../Popuper/popups";
import { CLOSE_POPUP } from "../_store/types";

/**
 *
 */
describe("Modal", () => {
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
	it("should render modal", () => {
		const wrapper = mount(
			<Provider store={store}>
				<Modal
					isOn={true}
					title={"Title of the modal"}
					submitText={"Confirm"}
					loading={false}
					approved={false}
				>
					<div className="content">Content</div>
				</Modal>
			</Provider>,
		);

		expect(wrapper.exists(Modal)).toBeTruthy();
	});

	/**
	 *
	 */
	it("should show preloader", () => {
		const wrapper = mount(
			<Provider store={store}>
				<Modal
					isOn={true}
					title={"Title of the modal"}
					submitText={"Confirm"}
					loading={true}
					approved={false}
				>
					<div className="content">Content</div>
				</Modal>
			</Provider>,
		);

		expect(wrapper.find(".loading").length).toBe(1);
	});

	/**
	 *
	 */
	it("should run function on submit", () => {
		const log = jest.fn();

		const wrapper = mount(
			<Provider store={store}>
				<Modal
					title={"Title of the modal"}
					onSubmit={log}
					loading={false}
				>
					<div className="content">Content</div>
				</Modal>
			</Provider>,
		);

		const btn = wrapper.find(".submit").at(0);

		btn.simulate("click");

		expect(log).toHaveBeenCalledTimes(1);
	});

	/**
	 *
	 */
	it("should close modal", () => {
		const mockStore = configureStore([]);

		const newStore = mockStore({});

		const wrapper = mount(
			<Provider store={newStore}>
				<Modal
					title={"Title of the modal"}
					loading={false}
					type={CHANGE_POSITION_POPUP}
				>
					<div className="content">Content</div>
				</Modal>
			</Provider>,
		);

		const btn = wrapper.find(".cancel");

		btn.simulate("click");

		const actions = newStore.getActions();

		const pushAction = actions.find(item => {
			return (
				item.payload === CHANGE_POSITION_POPUP &&
				item.type === CLOSE_POPUP
			);
		});

		expect(pushAction !== undefined).toBeTruthy();
	});
});
