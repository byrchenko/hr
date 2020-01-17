import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import reducers from "./reducer";

export const history = createBrowserHistory();

export default initialState =>
	createStore(
		reducers(history),
		initialState,
		composeWithDevTools(
			applyMiddleware(routerMiddleware(history)),
		),
	);
