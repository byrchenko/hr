import React from "react";
import {mount} from "enzyme";
import Home from "./Home";

describe("Home component", function() {
	it("should render component", () => {
		const wrapper = mount(<Home />);

		// console.log(wrapper.find('div').at(0).html())
	});
});