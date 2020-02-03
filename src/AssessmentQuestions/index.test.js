import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import AssessmentQuestions from "./index";
import { fetchDataSuccess } from "../_actions";
import { EMPLOYEE_ENTITY } from "../_store/entities";

/**
 *
 */
describe("Assessment questions", () => {
	let store;

	/**
	 *
	 */
	beforeEach(() => {
		store = configureStore([])({});
	});

	/**
	 *
	 */
	it("should show 404 for hr", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY));

		const wrapper = mount(
			<Provider store={store}>
				<AssessmentQuestions />
			</Provider>,
		);
	});

	/**
	 *
	 */
	it("should show error ", () => {});

	/**
	 *
	 */
	it("should render questions", () => {});

	/**
	 *
	 */
	it("should should validate inputs", () => {});

	/**
	 *
	 */
	it("should show incompleteness error", () => {});

	/**
	 *
	 */
	it("should go to the next step", () => {});

	/**
	 *
	 */
	it("should go to previous step", () => {});

	/**
	 *
	 */
	it("should change button for last questions block", () => {});
});
