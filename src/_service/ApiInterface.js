import ApiInterfaceAbstract from "./ApiInterfaceAbstract";
import store from "../_store";
import { fetchDataError, fetchDataLoading, fetchDataSuccess } from "../_actions";
import { USERS_ENTITY } from "../_store/entities";

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
	 * Fetching users
	 */
	getUsers() {
		this.dispatch(fetchDataLoading(USERS_ENTITY));

		this._sendGet(this.API_URL + 'users')
			.then(result => result.text())
			.then(text => this.dispatch(fetchDataSuccess(USERS_ENTITY, text)))
			.catch(error => {
				console.warn(error);

				this.dispatch(fetchDataError(USERS_ENTITY))
			})
	}
}

const instance = new ApiInterface(store.dispatch);

Object.freeze(instance);

export default instance;