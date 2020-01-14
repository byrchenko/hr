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

/**
 *
 * @param node
 */
function onEntering(node) {
	const parent = node.parentNode;
	const width = parent.clientWidth;

	const tl = new TimelineMax();

	tl.from(
		node,
		0.3,
		{
			position: "absolute",
			width: `${width}px`,
			top: 0,
			left: 0,
			autoAlpha: 0,
			delay: 0.2
		}
	);
}

/**
 *
 * @param node
 */
function onExiting(node) {
	gsap.to(
		node,
		.2,
		{
			opacity: 0,
		},
	);
}

/**
 *
 */
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
							timeout={600}
							onEntering={onEntering}
							onExiting={onExiting}
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