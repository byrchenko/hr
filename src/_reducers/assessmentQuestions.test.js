import reducer from "./assessmentQuestions";
import { initialState } from "./assessmentQuestions";
import {
	ASSESSMENT_FINISH,
	ASSESSMENT_NEXT_STEP,
	ASSESSMENT_PREV_STEP,
	ASSESSMENT_SET_EMPLOYEE,
	ASSESSMENT_START,
} from "../_store/types";
import { hr } from "../_api/employee";

/**
 *
 */
describe("AssessmentQuestions reducer", () => {
	/**
	 *
	 */
	it("should start assessment", () => {
		const action = {
			type: ASSESSMENT_START,
		};

		const sample = reducer(undefined, action);

		expect(sample).toEqual(
			Object.assign({}, initialState, { isStarted: true }),
		);
	});

	/**
	 *
	 */
	it("should set employee for assessment", () => {
		const action = {
			type: ASSESSMENT_SET_EMPLOYEE,
			payload: hr,
		};

		const sample = reducer(undefined, action);

		expect(sample).toEqual(
			Object.assign({}, initialState, { employee: hr }),
		);
	});

	/**
	 *
	 */
	it("should go to next step", () => {
		const action = {
			type: ASSESSMENT_NEXT_STEP,
		};

		const sample = reducer(undefined, action);

		expect(sample).toEqual(
			Object.assign({}, initialState, { step: 2 }),
		);
	});

	/**
	 *
	 */
	it("should go to previous step", () => {
		const state = Object.assign({}, initialState, { step: 3 });

		const action = {
			type: ASSESSMENT_PREV_STEP,
		};

		const sample = reducer(state, action);

		expect(sample).toEqual(
			Object.assign({}, initialState, { step: 2 }),
		);
	});

	/**
	 *
	 */
	it("should finish assessment", () => {
		const action = {
			type: ASSESSMENT_FINISH,
		};

		const sample = reducer(undefined, action);

		expect(sample).toEqual(initialState);
	});
});
