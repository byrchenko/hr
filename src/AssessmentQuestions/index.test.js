import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import AssessmentQuestions from "./index";
import { fetchDataError, fetchDataSuccess } from "../_actions";
import {
	ASSESSMENT_QUESTIONS_ENTITY,
	EMPLOYEE_ENTITY,
} from "../_store/entities";
import { hr } from "../_api/employee";
import block from "../_api/assessmentQuestions";
import Item from "./Item";

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
	it("should show error ", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, hr));
		store.dispatch(fetchDataError(ASSESSMENT_QUESTIONS_ENTITY));

		const wrapper = mount(
			<Provider store={store}>
				<AssessmentQuestions />
			</Provider>,
		);

		expect(wrapper.exists(".error")).toBeTruthy();
	});

	/**
	 *
	 */
	it("should render questions", () => {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, hr));
		store.dispatch(
			fetchDataSuccess(ASSESSMENT_QUESTIONS_ENTITY, block),
		);

		const wrapper = mount(
			<Provider store={store}>
				<AssessmentQuestions />
			</Provider>,
		);

		const itemCount = wrapper.find(Item).length;

		expect(itemCount).toEqual(4);
	});

	/**
	 *
	 */
	it("should should validate inputs", () => {});

	/**
	 *
	 */
	it("should add answers to state", () => {});

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
