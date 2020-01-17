import ApiInterfaceAbstract from "./ApiInterfaceAbstract";
import store from "../_store";

class ApiInterface extends ApiInterfaceAbstract {
	/**
	 * Constructor
	 *
	 * @param dispatch
	 */
	constructor(dispatch) {
		super();

		this.dispatch = dispatch;
		this.API_URL =
			"https://portal.veloplaneta.com.ua/hr/api/" ||
			process.env.API_URL;
	}
}

const instance = new ApiInterface(store.dispatch);

Object.freeze(instance);

export default instance;
