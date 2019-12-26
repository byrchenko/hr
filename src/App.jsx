import React from "react";
import css from "./App.scss";
import Test from "./Test";

class App extends React.Component {

	/**
	 *
	 * @param props
	 */
	constructor(props) {
		super(props);

		this.state = {
			component: null
		}
	}

	/**
	 *
	 */
	componentDidMount() {
		import("./Test").then(component => {

			this.setState({component: component.default()})
		})
	}

	/**
	 *
	 */
	render() {
		const {component} = this.state;

		return (
			<div className={css.index}>
				{component}
			</div>
		)
	}
}

export default App;
