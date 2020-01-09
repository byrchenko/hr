import React from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import Label from "./Label";
import Wrapper from "./Wrapper";

class PageTitle extends React.Component {

	render() {
		return (
			<Wrapper>
				<Title />

				<Label title="Руководитель" />
			</Wrapper>
		);
	}
}

export default PageTitle;