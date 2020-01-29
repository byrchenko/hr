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
import Modal from "../Modal";
import text from "./locale/ru";
import queryString from "query-string";
import { AnimatePresence, motion } from "framer-motion";
import ModalContent from "./ModalContent";

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
						node.style.zIndex = "0";
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
	 */
	isModal() {
		const { search } = this.props;

		const parsed = queryString.parse(search);

		return Object.prototype.hasOwnProperty.call(
			parsed,
			"change_position",
		);
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<>
				<TransitionGroup component={null}>
					{this.renderUI()}
				</TransitionGroup>

				<AnimatePresence>
					{this.isModal() && (
						<motion.div
							key="modal"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<Modal
								title={text.changePosition}
								submitAction={() => {}}
								submitText={text.changePositionBtn}
							>
								<ModalContent />
							</Modal>
						</motion.div>
					)}
				</AnimatePresence>
			</>
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
		router: {
			location: { search },
		},
		employee: { data },
	} = state;

	if (data === null || data === undefined) {
		return null;
	}

	const { role } = data;

	return {
		role,
		search,
	};
};

export default connect(mapState)(Sidebar);
