import ApiInterfaceAbstract from "./ApiInterfaceAbstract";
import store from "../_store";
import {
	fetchDataError,
	fetchDataLoading,
	fetchDataSuccess,
	resetReducer,
} from "../_actions";
import { CHANGE_POSITION_ENTITY } from "../_store/entities";

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

	/**
	 *
	 * @param dispatch
	 * @param user
	 * @param position
	 */
	changeUserPosition(dispatch, position, user) {
		dispatch(fetchDataLoading(CHANGE_POSITION_ENTITY));

		// fetch()
		// 	.then(result => result.json())
		// 	.then(json => {
		// 		this.dispatch(
		// 			fetchDataSuccess(CHANGE_POSITION_ENTITY, json),
		// 		);
		// 		this.dispatch(resetReducer(CHANGE_POSITION_ENTITY));
		// 	})
		// 	.catch(() =>
		// 		this.dispatch(fetchDataError(CHANGE_POSITION_ENTITY)),
		// 	);

		setTimeout(() => {
			dispatch(
				fetchDataSuccess(CHANGE_POSITION_ENTITY, "data"),
			);
			dispatch(resetReducer(CHANGE_POSITION_ENTITY));
		}, 3000);
	}
}

const instance = new ApiInterface(store.dispatch);

Object.freeze(instance);

export default instance;
