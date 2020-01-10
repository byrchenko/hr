import React from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import Home from "../_pages/Home";
import Assessment from "../_pages/Assessment";
import Settings from "../_pages/Settings";
import Processing from "../_pages/Processing";
import MainLayout from "../_layout/TwoColumn";
import { Transition, TransitionGroup } from "react-transition-group";
import gsap from "gsap";
import { connect } from "react-redux";
import { TimelineMax } from "gsap";

class Router extends React.Component {

	/**
	 *
	 * @returns {function(): *}
	 */
	renderHome() {
		return () => (
			<Home/>
		);
	}

	/**
	 *
	 * @returns {function(): *}
	 */
	renderAssessment() {
		return () => <Assessment/>;
	}

	/**
	 *
	 * @returns {function(): *}
	 */
	renderSettings() {
		return () => (
			<Settings/>
		);
	}

	/**
	 *
	 * @returns {function(): *}
	 */
	renderProcessing() {
		return () => <Processing/>;
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const { history, location, pathname } = this.props;

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

		console.log(pathname);

		return (
			<ConnectedRouter history={history}>
				<MainLayout>
					<TransitionGroup component={null}>
						<Transition
							key={pathname}
							timeout={1000}
							onEnter={node => {
								node.style.display = "none";
							}}
							onEntering={node => {
								// const tl = new TimelineMax();
								//
								// tl.delay(0.5);
								//
								// tl
								// 	.fromTo(
								// 		node,
								// 		{
								// 			display: "none",
								// 			autoAlpha: 0,
								// 		},
								// 		{
								// 			opacity: 1,
								// 			delay: 0.5,
								// 			duration: 0.5,
								// 		},
								// 	);
							}}
							onEntered={node => {
								node.style.display = "block";
							}}
							onExiting={node => {
								console.log(11111111);

								gsap.to(
									node,
									.5,
									{
										opacity: 0,
									},
								);
							}}
						>
							<Switch location={location}>
								<Route exact path="/hr" render={this.renderHome()}/>
								<Route path="/hr/assessment" render={this.renderAssessment()}/>
								<Route path="/hr/settings" render={this.renderSettings()}/>
								<Route path="/hr/processing" render={this.renderProcessing()}/>
								<Route render={() => (<div>Oops.. 404</div>)}/>
							</Switch>
						</Transition>
					</TransitionGroup>
				</MainLayout>
			</ConnectedRouter>
		);
	}
}

const mapState = state => {
	const {
		router: {
			location,
			location: {
				pathname,
			},
		},
	} = state;

	return {
		location,
		pathname,
	};
};

export default connect(mapState)(Router);