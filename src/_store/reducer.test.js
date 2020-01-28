import {
	fetchSuccessHandler,
	fetchLoadingHandler,
	fetchErrorHandler,
	listById,
} from "./reducer";

describe("Root reducer", () => {
	/**
	 *
	 */
	it("should return new data", () => {
		const action = {
			type: "FETCH_SUCCESS",
			entity: "EMPLOYEE",
			data: {
				id: 11,
				name: "Vasya",
				last_name: "Pupkin",
				role: "hr",
				department: "Marketing",
				position: "Manager",
				last_assessment_date: "22/12/2019",
			},
		};

		const initialState = {
			data: null,
			error: false,
			loading: false,
			sync: false,
			additional: "some property",
		};

		const sample = fetchSuccessHandler(initialState, action.data);

		expect(sample).toEqual(
			Object.assign({
				data: action.data,
				loading: false,
				error: false,
				sync: true,
				additional: "some property",
			}),
		);
	});

	/**
	 *
	 */
	it("should return error", () => {
		const action = {
			type: "FETCH_ERROR",
			entity: "EMPLOYEE",
		};

		const initialState = {
			data: null,
			error: false,
			loading: false,
			sync: false,
			additional: "some property",
		};

		const sample = fetchErrorHandler(initialState, action);

		expect(sample).toEqual(
			Object.assign({
				data: initialState.data,
				loading: false,
				error: true,
				sync: false,
				additional: "some property",
			}),
		);
	});

	/**
	 *
	 */
	it("should return error", () => {
		const action = {
			type: "FETCH_LOADING",
			entity: "EMPLOYEE",
		};

		const initialState = {
			data: null,
			error: false,
			loading: false,
			sync: false,
			additional: "some property",
		};

		const sample = fetchLoadingHandler(initialState, action);

		expect(sample).toEqual(
			Object.assign({
				data: initialState.data,
				loading: true,
				error: false,
				sync: false,
				additional: "some property",
			}),
		);
	});

	/**
	 *
	 */
	it("should return list by id", () => {
		const list = [
			{
				id: 1,
			},
			{
				id: 4,
			},
			{
				id: 3,
			},
		];

		const sample = listById(list);

		expect(sample).toEqual({
			1: {
				id: 1,
			},
			4: {
				id: 4,
			},
			3: {
				id: 3,
			},
		});
	});
});
