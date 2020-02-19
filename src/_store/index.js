import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import thunk from 'redux-thunk';
import reducers from "./reducer";

export const history = createBrowserHistory();

export default createStore(
		reducers(history),
		{},
		composeWithDevTools(
			applyMiddleware(routerMiddleware(history), thunk),
		),
	);
