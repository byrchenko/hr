import popups from "./popups";
import { initialState } from "./popups";
import { CLOSE_POPUP, OPEN_POPUP } from "../_store/types";
import {
	ADD_COMPETENCY_POPUP,
	CHANGE_POSITION_POPUP,
} from "../Popuper/popups";

describe("Popups reducer", () => {
	/**
	 *
	 */
	it("should return initial state", () => {
		const action = {
			type: "some action",
		};

		const sample = popups(undefined, action);

		expect(sample).toEqual(initialState);
	});

	/**
	 *
	 */
	it.only("should add popup to show", () => {
		const action = {
			type: OPEN_POPUP,
			payload: {
				type: CHANGE_POSITION_POPUP,
				data: "test",
			},
		};

		const sample = popups(undefined, action);

		expect(sample.show).toEqual(CHANGE_POSITION_POPUP);
	});

	/**
	 *
	 */
	it("should close popup", () => {
		const action = {
			type: CLOSE_POPUP,
			payload: CHANGE_POSITION_POPUP,
		};

		const state = {
			popups: {
				show: CHANGE_POSITION_POPUP,
			},
		};

		const sample = popups(state, action);

		expect(sample).toEqual(initialState);
	});

	/**
	 *
	 */
	it("should not close popup (invalid action)", () => {
		const action = {
			type: CLOSE_POPUP,
			payload: ADD_COMPETENCY_POPUP,
		};

		const state = {
			popups: {
				show: CHANGE_POSITION_POPUP,
			},
		};

		const sample = popups(state, action);

		expect(sample).toEqual(state);
	});
});
