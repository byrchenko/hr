import {createStore, applyMiddleware} from "redux";
import reducers from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));

export default store;
