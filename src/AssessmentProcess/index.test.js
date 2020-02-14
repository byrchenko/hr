import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";

describe("", () => {
	let store;

	beforeEach(() => {
		store = configureStore([])({});
	});

	it("should render statistics", () => {
		const wrapper = mount(
			<Provider store={store}>
				//some stuff here
			</Provider>,
		);
	});

	/**
	 *
	 */
	it("should open edit popup", () => {

	});

	/**
	 *
	 */
	it("should open creation popup", () => {

	});

	/**
	 *
	 */
	it("should add evaluating user for task", () => {
		
	});

	/**
	 *
	 */
	it("should remove evaluating user for task", () => {

	});

	/**
	 *
	 */
	it("should add estimated user for task", () => {
		
	});

	/**
	 *
	 */
	it("should remove estimated user for task", () => {

	});

	/**
	 *
	 */
	it("should set task date", () => {
		
	});

	/**
	 *
	 */
	it("should set task title", () => {

	});
});