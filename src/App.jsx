import React from "react";
import { Provider } from "react-redux";
import Router from "./_router";
import store, { history } from "./_store";
import "./_sass/global.scss";
import ApiInterface from "./_service/ApiInterface";

/**
 *
 */
class App extends React.Component {
	/**
	 *
	 */
	componentDidMount() {
		const {dispatch} = store;
		const {
			employee: {
				id
			}
		} = store.getState();

		console.log(id)

		ApiInterface
			.fetchCurrentUser(dispatch)
			.fetchCompanyStructure(dispatch, store.getState().employee.id)

		// store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, hr));
		// store.dispatch(fetchDataSuccess(DIVISIONS_ENTITY, divisions));
		// store.dispatch(
		// 	fetchDataSuccess(
		// 		ASSESSMENT_TABLE_ENTITY,
		// 		assessmentEmployeesList,
		// 	),
		// );
		// store.dispatch(fetchDataSuccess(ASSESSMENT_SETTINGS_ENTITY, settings));
		// store.dispatch(fetchDataSuccess(PROCESS_ENTITY, processData));
		// store.dispatch(assessmentStart(hr));
		// store.dispatch(
		// 	fetchDataSuccess(ASSESSMENT_QUESTIONS_ENTITY, block),
		// );
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
