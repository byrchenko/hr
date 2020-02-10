import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import data from "../_api/assessmentHr";

describe("", () => {
	let store;

	beforeEach(() => {
		store = configureStore([])({});
	});

	/**
	 *
	 */
	it("should show error page is assessment data failed to fetch", () => {});

	it("should loading", () => {});

	it("should change hr mark for question", () => {});

	it("should change hr comment for question", () => {});

	it("should show add task inputs", () => {});

	it("should add task", () => {});

	it("should validate data before submit", () => {});

	it("should send data", () => {});
});
