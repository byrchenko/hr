import React from "react";
import { Provider } from "react-redux";
import Router from "./_router";
import createStore, { history } from "./_store";
import "./_sass/global.scss";
import { fetchDataSuccess } from "./_actions";
import { EMPLOYEE_ENTITY } from "./_store/entities";
import { employee } from "./_api/employee";

const store = createStore({});

class App extends React.Component {
	/**
	 *
	 */
	componentDidMount() {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, employee));
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<Provider store={store}>
				<Router history={history} />
			</Provider>
		);
	}
}

export default App;
