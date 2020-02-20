import React from "react";
import { Provider } from "react-redux";
import Router from "./_router";
import store, { history } from "./_store";
import "./_sass/global.scss";
import { getCurrentUserId } from "./_actions";
import { fetchEmployee } from "./_actions/employee";

/**
 *
 */
class App extends React.Component {

	/**
	 *
	 */
	componentDidMount() {
		const { dispatch } = store;

		dispatch(getCurrentUserId());
		dispatch(fetchEmployee());
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<Provider store={store}>
				<Router history={history}/>
			</Provider>
		);
	}
}

export default App;
