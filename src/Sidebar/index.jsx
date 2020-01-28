import React from "react";
import PropTypes from "prop-types";
import { SHOW_USER, SHOW_EMPLOYEES } from "./config";
import User from "./User";
import Employees from "./Employees";
import {
	CSSTransition,
	TransitionGroup,
} from "react-transition-group";
import { gsap } from "gsap";
import { connect } from "react-redux";
import {
	HR_PERMISSION,
	SUPERVISOR_PERMISSION,
} from "../_store/roles";
import PermissionController from "../_permissions/Controller";

class Sidebar extends React.Component {
	/**
	 *
	 * @param props
	 */
	constructor(props) {
		super(props);

		this.state = {
			show: SHOW_USER,
		};
	}

	/**
	 *
	 */
	showEmployees() {
		return () => {
			this.setState({ show: SHOW_EMPLOYEES });
		};
	}

	/**
	 *
	 * @returns {*}
	 */
	renderUI() {
		const { show } = this.state;
		const { role } = this.props;

		if (show === SHOW_EMPLOYEES) {
			return (
				<CSSTransition
					key={"employees"}
					timeout={350}
					onEntering={node => {
						gsap.fromTo(
							node,
							{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								xPercent: 100,
							},
							{
								top: 0,
								left: 0,
								xPercent: 0,
								duration: 0.35,
								ease: "power3",
							},
						);
					}}
					onEntered={node => {
						node.style.position = "static";
					}}
				>
					<PermissionController
						allowed={[
							HR_PERMISSION,
							SUPERVISOR_PERMISSION,
						]}
					>
						<Employees />
					</PermissionController>
				</CSSTransition>
			);
		}

		return (
			<CSSTransition
				key={"user"}
				timeout={350}
				onExiting={node => {
					gsap.fromTo(
						node,
						{
							backgroundColor: "#fff",
						},
						{
							xPercent: -35,
							backgroundColor: "#ccc",
							duration: 0.35,
							ease: "power3",
						},
					);
				}}
			>
				<User
					showEmployees={this.showEmployees()}
					role={role}
				/>
			</CSSTransition>
		);
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<TransitionGroup component={null}>
				{this.renderUI()}
			</TransitionGroup>
		);
	}
}

/**
 *
 * @param state
 * @returns {{role: *}}
 */
const mapState = state => {
	const {
		employee: { data },
	} = state;

	if (data === null || data === undefined) {
		return null;
	}

	const { role } = data;

	return {
		role,
	};
};

export default connect(mapState)(Sidebar);
