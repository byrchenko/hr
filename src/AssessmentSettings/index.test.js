import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import AssessmentSettings from "."

describe("Assessment settings", () => {
	let store;

	beforeEach(() => {
		store = configureStore([])({});
	});

	it("should render positions", () => {
		const wrapper = mount(
			<Provider store={store}>
				//some stuff here
			</Provider>,
		);
	});

	/**
	 * 
	 */
	describe("Positions", () => {

		/**
		 * 
		 */
		it("should render all positions", () => {
			const wrapper = mount(
				<Provider store={store}>
					<AssessmentSettings />
				</Provider>,
			);


		});

		/**
		 * 
		 */
		it("should change blocks filter to 'all'", () => {
			
		});

		/**
		 *
		 */
		it("should change blocks filter to positions id", () => {

		});

		/**
		 *
		 */
		it("should show tooltip with edit options", () => {

		});

		/**
		 *
		 */
		it("should open edit popup and edit position", () => {

		});

		/**
		 *
		 */
		it("should open popup 'add position' and add position", () => {

		});

		/**
		 *
		 */
		it("should delete position", () => {

		});
	});

	/**
	 *
	 */
	describe("Blocks", () => {

		/**
		 *
		 */
		it("should render blocks by filter", () => {

		});

		/**
		 *
		 */
		it("should change competences filter to 'all'", () => {

		});

		/**
		 *
		 */
		it("should change competences filter to block id", () => {

		});

		/**
		 *
		 */
		it("should show tooltip with edit options", () => {

		});

		/**
		 *
		 */
		it("should open edit popup and edit block", () => {

		});

		/**
		 *
		 */
		it("should open popup 'add block' and add block", () => {

		});

		/**
		 *
		 */
		it("should delete block", () => {

		});
	});

	/**
	 *
	 */
	describe("Competences", () => {

		/**
		 *
		 */
		it("should render competences by filter", () => {

		});

		/**
		 *
		 */
		it("should show tooltip with edit options", () => {

		});

		/**
		 *
		 */
		it("should open edit popup and edit competence", () => {

		});

		/**
		 *
		 */
		it("should open popup 'add competence' and add competence", () => {

		});

		/**
		 *
		 */
		it("should delete competence", () => {

		});
	});
});