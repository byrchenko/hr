import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

window.loadPromise = new Promise(function(resolve) {
	window.addEventListener("load", resolve);
});

ReactDOM.render(<App/>, document.getElementById("root"));
