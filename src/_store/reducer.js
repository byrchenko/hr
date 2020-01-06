import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import hr from "../_reducers/hr";

export default history => combineReducers({
	router: connectRouter(history),
	// hr,
});
