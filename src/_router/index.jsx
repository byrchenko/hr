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
import { connect } from "react-redux";
import { TimelineMax } from "gsap";
import {gsap} from "gsap";
import {CSSPlugin} from "gsap/all";




/**
 *
 * @param node
 * @param appears
 */
function onEnter(node, appears) {
	gsap.registerPlugin(CSSPlugin);

	if(!appears) {
		node.style.height = "0";
	}

	const tl = new TimelineMax({ paused: true });

	tl
		.from(node, 0, {
			height: "0",
			autoAlpha: 0,
			delay: appears ? 0 : 0.2
		})
		.from(node, 0.3, {
			autoAlpha: 0,
			ease: "power0",
		});

	tl.play()
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
		const { history } = this.props;

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
					<Route render={({location}) => {
						const { pathname } = location;

						return (
							<TransitionGroup component={null}>
								<Transition
									key={pathname}
									appear={true}
									timeout={{
										enter: 700,
										exit: 0,
									}}
									onEnter={onEnter}
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
						);
					}}/>

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