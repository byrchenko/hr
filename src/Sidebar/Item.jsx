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
	const renderContent = () => {
		if (!isOpen) {
			return null;
		}

		return (
			<section className={css.section}>
				<div className={css.wrapper}>
					{renderChildren()}

					{renderEmployees()}
				</div>
			</section>
		);
	};

	return (
		<div className={css.item}>
			<header
				onClick={() => setExpanded(isOpen ? false : index)}
				className={
					isOpen ? `${css.header} ${css.open}` : css.header
				}
			>
				<Triangle
					height={4}
					width={6}
					className={
						isOpen
							? `${css.triangle} ${css.rotate}`
							: css.triangle
					}
				/>

				{item.title}
			</header>

			{renderContent()}
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
