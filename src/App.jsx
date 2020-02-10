import React from "react";
import { Provider } from "react-redux";
import Router from "./_router";
import createStore, { history } from "./_store";
import "./_sass/global.scss";
import {
	assessmentSetEmployee,
	assessmentStart,
	fetchDataError,
	fetchDataLoading,
	fetchDataSuccess,
} from "./_actions";
import {
	ASSESSMENT_QUESTIONS_ENTITY,
	ASSESSMENT_TABLE_ENTITY,
	DIVISIONS_ENTITY,
	EMPLOYEE_ENTITY,
} from "./_store/entities";
import { employee, hr, supervisor } from "./_api/employee";
import divisions from "./_api/divisions";
import assessmentEmployeesList from "./_api/assessmentEmployeesList";
import block from "./_api/assessmentQuestions";

const store = createStore({});

class App extends React.Component {
	/**
	 *
	 */
	componentDidMount() {
		store.dispatch(fetchDataSuccess(EMPLOYEE_ENTITY, hr));
		store.dispatch(fetchDataSuccess(DIVISIONS_ENTITY, divisions));
		store.dispatch(
			fetchDataSuccess(
				ASSESSMENT_TABLE_ENTITY,
				assessmentEmployeesList,
			),
		);
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
