import React from "react";
import { Provider } from "react-redux";
import Router from "./_router";
import store, { history } from "./_store";

function App() {
	return (
		<Provider store={store}>
			<Router history={history}/>
		</Provider>
	);
}

export default App;
