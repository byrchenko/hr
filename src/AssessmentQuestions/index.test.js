import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import AssessmentQuestions from "./index";
import {
	assessmentNextStep,
	fetchDataError,
	fetchDataSuccess,
} from "../_actions";
import {
	ASSESSMENT_QUESTIONS_ENTITY,
	EMPLOYEE_ENTITY,
} from "../_store/entities";
import { hr } from "../_api/employee";
import block, {
	completedQuestions,
	lastCompletedQuestions,
} from "../_api/assessmentQuestions";
import ItemConnected from "./Item";
import { Item } from "./Item";
import Mark from "./Mark";
import { initialState } from "../_reducers/assessmentQuestions";
import createStore from "../_store";
import Next from "./Next";

import Previous from "./Previous";

/**
 *
 */
describe("Assessment questions", () => {
	let store;

	/**
	 *
	 */
	beforeEach(() => {
		store = createStore({
			assessmentQuestions: Object.assign({}, initialState, {
				data: block,
			}),
		});

		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, hr));
	});

	/**
	 *
	 */
	it("should show error ", () => {
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
	it("should should validate inputs", () => {
		store.dispatch(
			fetchDataSuccess(ASSESSMENT_QUESTIONS_ENTITY, block),
		);

		const wrapper = mount(
			<Provider store={store}>
				<AssessmentQuestions />
			</Provider>,
		);

		const buttonNext = wrapper.find(Next);

		buttonNext.simulate("click");

		wrapper.update();

		const question = wrapper.find(Item).at(0);

		expect(question.prop("error")).toEqual({
			id: 0,
			type: "INVALID_MARK",
		});
	});

	/**
	 *s
	 */
	it("should change mark", () => {
		const wrapper = mount(
			<Provider store={store}>
				<ItemConnected
					id={0}
					title={"title"}
					description={"description"}
					initialMark={null}
					initialComment={null}
				/>
			</Provider>,
		);

		const radio = wrapper.find(".input").at(0);

		radio.simulate("change");

		wrapper.update();

		const mark = wrapper.find(Mark).at(0);

		expect(mark.prop("selected")).toEqual(1);
	});

	/**
	 *
	 */
	it("should go to the next step", done => {
		store.dispatch(
			fetchDataSuccess(
				ASSESSMENT_QUESTIONS_ENTITY,
				completedQuestions,
			),
		);

		const wrapper = mount(
			<Provider store={store}>
				<AssessmentQuestions />
			</Provider>,
		);

		const buttonNext = wrapper.find(Next);

		let counter = 1;

		const unsubscribe = store.subscribe(() => {
			let currentStep = store.getState().assessmentQuestions
				.step;

			if (counter === 3) {
				expect(currentStep).toEqual(2);

				done();
			}

			counter++;
		});

		buttonNext.simulate("click");
	});

	/**
	 *
	 */
	it("should go to previous step", done => {
		store.dispatch(
			fetchDataSuccess(
				ASSESSMENT_QUESTIONS_ENTITY,
				completedQuestions,
			),
		);

		store.dispatch(assessmentNextStep());

		const wrapper = mount(
			<Provider store={store}>
				<AssessmentQuestions />
			</Provider>,
		);

		const buttonNext = wrapper.find(Previous);

		let counter = 1;

		const unsubscribe = store.subscribe(() => {
			let currentStep = store.getState().assessmentQuestions
				.step;

			if (counter === 3) {
				expect(currentStep).toEqual(1);

				done();
			}

			counter++;
		});

		buttonNext.simulate("click");
	});

	/**
	 *
	 */
	it("should change button for last questions block", () => {
		store.dispatch(
			fetchDataSuccess(
				ASSESSMENT_QUESTIONS_ENTITY,
				lastCompletedQuestions,
			),
		);

		store.dispatch(assessmentNextStep());

		const wrapper = mount(
			<Provider store={store}>
				<AssessmentQuestions />
			</Provider>,
		);

		const buttonNext = wrapper.find(Next);

		expect(buttonNext.text()).toEqual("Завершить оценку");
	});

	/**
	 *
	 */
	it("should add comment", () => {
		const wrapper = mount(
			<Provider store={store}>
				<ItemConnected
					id={0}
					title={"title"}
					description={"description"}
					initialMark={null}
					initialComment={null}
				/>
			</Provider>,
		);

		const text = wrapper.find("textarea").at(0);

		text.simulate("change", { target: { value: "test" } });

		wrapper.update();

		const updatedText = wrapper.find("textarea").at(0);

		expect(updatedText.prop("value")).toEqual("test");
	});

	/**
	 *
	 */
	it("should render only next button if step is first", () => {
		store.dispatch(
			fetchDataSuccess(
				ASSESSMENT_QUESTIONS_ENTITY,
				completedQuestions,
			),
		);

		const wrapper = mount(
			<Provider store={store}>
				<AssessmentQuestions />
			</Provider>,
		);

		expect(wrapper.exists(Previous)).toBeFalsy();
	});
});
