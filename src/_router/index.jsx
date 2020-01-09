import React from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import Home from "../_pages/Home";
import Assessment from "../_pages/Assessment";
import Settings from "../_pages/Settings";
import Processing from "../_pages/Processing";
import MainLayout from "../_layout/TwoColumn";

class Router extends React.Component {

	/**
	 *
	 * @returns {function(): *}
	 */
	renderHome() {
		return () => <Home />
	}

	/**
	 *
	 * @returns {function(): *}
	 */
	renderAssessment() {
		return () => <Assessment />
	}

	/**
	 *
	 * @returns {function(): *}
	 */
	renderSettings() {
		return () => <Settings />
	}

	/**
	 *
	 * @returns {function(): *}
	 */
	renderProcessing() {
		return () => <Processing />
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const {history} = this.props;

		// const {
		// 	user: {
		// 		role
		// 	}
		// } = store.getState();
		//
		// if(!role) {
		// 	return (
		// 		<div>Loading..</div>
		// 	)
		// }

		return (
			<ConnectedRouter history={history}>
				<MainLayout>
					<Switch>
						<Route exact path="/hr" render={this.renderHome()}/>
						<Route path="/hr/assessment" render={this.renderAssessment()}/>
						<Route path="/hr/settings" render={this.renderSettings()}/>
						<Route path="/hr/processing" render={this.renderProcessing()}/>
						<Route render={() => (<div>Oops.. 404</div>)}/>
					</Switch>
				</MainLayout>
			</ConnectedRouter>
		);
	}
}

export default Router;