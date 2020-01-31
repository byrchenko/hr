import React from "react";
import PropTypes from "prop-types";
import css from "./Item.scss";
import { motion, AnimatePresence } from "framer-motion";
import Triangle from "../_svg/triangle_down.svg";
import { HR_PERMISSION } from "../_store/roles";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import Employee from "./Employee";
import { setChangePositionUser } from "../_actions";
import { role } from "../_dispatchers";

const Item = ({
	item,
	index,
	expanded,
	setExpanded,
	renderChild,
	push,
	role,
}) => {
	const [innerExpanded, setInnerExpanded] = React.useState(false);

	const isOpen = index === expanded;

	/**
	 *
	 */
	const renderChildren = () => {
		const { children } = item;

		if (children === null || children === undefined) {
			return null;
		}

		return children.map((child, index) =>
			renderChild(
				child,
				index,
				innerExpanded,
				setInnerExpanded,
			),
		);
	};

	/**
	 *
	 * @param id
	 */
	const openModal = id => {
		if (role !== HR_PERMISSION) {
			return null;
		}

		push(`./?change_position=${id}`);
	};

	/**
	 *
	 * @returns {*}
	 * @param employee
	 */
	const renderEmployee = employee => {
		return (
			<Employee
				item={employee}
				key={employee.id}
				openModal={openModal}
			/>
		);
	};

	/**
	 *
	 */
	const renderEmployees = () => {
		const { employees } = item;

		if (employees === null || employees === undefined) {
			return null;
		}

		return employees.map(renderEmployee);
	};

	/**
	 *
	 * @returns {null|*}
	 */
	const accordionContent = () => {
		if (!isOpen) {
			return null;
		}

		return (
			<motion.section
				key="content"
				initial="collapsed"
				animate="open"
				exit="collapsed"
				variants={{
					open: { opacity: 1, height: "auto" },
					collapsed: { opacity: 0, height: 0 },
				}}
				transition={{
					duration: 0.8,
					ease: [0.04, 0.62, 0.23, 0.98],
				}}
				className={css.section}
			>
				<div className={css.wrapper}>
					{renderChildren()}

					{renderEmployees()}
				</div>
			</motion.section>
		);
	};

	const headerBackground = isOpen ? "#FFF" : "#EDEDED";
	const triangleClass = isOpen
		? `${css.triangle} ${css.rotate}`
		: css.triangle;

	return (
		<div className={css.item}>
			<motion.header
				initial={false}
				onClick={() => setExpanded(isOpen ? false : index)}
				animate={{
					backgroundColor: headerBackground,
				}}
				className={css.header}
			>
				<Triangle
					height={4}
					width={6}
					className={triangleClass}
				/>

				{item.title}
			</motion.header>

			<AnimatePresence initial={false}>
				{accordionContent()}
			</AnimatePresence>
		</div>
	);
};

/**
 *
 */
Item.propTypes = {
	item: PropTypes.object,
	index: PropTypes.number,
	expanded: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
	setExpanded: PropTypes.func,
	renderChild: PropTypes.func,
	push: PropTypes.func,
	changePositionUser: PropTypes.func,
	role: PropTypes.string,
};

/**
 *
 * @param state
 * @returns {{role: *}}
 */
const mapState = state => {
	return {
		role: role(state),
	};
};

/**
 *
 * @param dispatch
 */
const mapDispatch = dispatch => {
	return {
		changePositionUser: user =>
			dispatch(setChangePositionUser(user)),
		push: args => dispatch(push(args)),
	};
};

export default connect(mapState, mapDispatch)(Item);
