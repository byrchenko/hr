import ApiInterfaceAbstract from "./ApiInterfaceAbstract";
import store from "../_store";
import { fetchDataError, fetchDataLoading, fetchDataSuccess } from "../_actions";
import {
	EMPLOYEES_ENTITY,
	DIVISIONS_ENTITY,
	ASSESSMENT_TABLE_ENTITY,
} from "../_store/entities";

class ApiInterface extends ApiInterfaceAbstract {

	/**
	 * Constructor
	 *
	 * @param dispatch
	 */
	constructor(dispatch) {
		super();

		this.dispatch = dispatch;
		this.API_URL = 'https://portal.veloplaneta.com.ua/hr/api/'
	}

	/**
	 *
	 */
	getEmployees(list) {
		this.dispatch(fetchDataLoading(EMPLOYEES_ENTITY));

		const params = {
			list: list.join(','),
		};

		return this._sendGet(this.API_URL + "employees", params)
			.then(result => result.json())
			.then(employees => {
				this.dispatch(fetchDataSuccess(EMPLOYEES_ENTITY, employees));

				return true;
			})
			.catch(err => {
				console.warn(err);

				this.dispatch(fetchDataError(EMPLOYEES_ENTITY));

				return false;
			});
	}

	/**
	 * Fetching users
	 */
	getDivisions() {
		this.dispatch(fetchDataLoading(DIVISIONS_ENTITY));

		this._sendGet(this.API_URL + 'users')
			.then(result => result.json())
			.then(json => {
				this.dispatch(fetchDataSuccess(DIVISIONS_ENTITY, json))
			})
			.catch(err => {
				console.warn(err);

				this.dispatch(fetchDataError(DIVISIONS_ENTITY))
			})
	}

	/**
	 *
	 */
	getAssessmentTable() {
		this.dispatch(fetchDataLoading(ASSESSMENT_TABLE_ENTITY));

		let assessmentTable = null;

		this._sendGet(this.API_URL + 'users')
			.then(result => result.json())
			.then(json => {
				assessmentTable = json;

				const employees = [];

				json.forEach(item => {
					employees.push(item.employee_id);
				});

				return this.getEmployees(employees);
			})
			.then(isEmployeesFetched => {
				if (isEmployeesFetched) {
					this.dispatch(fetchDataSuccess(ASSESSMENT_TABLE_ENTITY, assessmentTable))
				} else {
					throw new Error('Error occurred while fetching users!')
				}
			})
			.catch(err => {
				console.warn(err);

				this.dispatch(fetchDataError(ASSESSMENT_TABLE_ENTITY))
			})
	}
}

const instance = new ApiInterface(store.dispatch);

Object.freeze(instance);

export default instance;