import React from "react";
import PropTypes from "prop-types";
import css from "./Item.scss";
import { motion, AnimatePresence } from "framer-motion";
import Triangle from "../_svg/triangle_down.svg";
import { HR_PERMISSION } from "../_store/roles";
import PermissionController from "../_permissions/Controller";
import Edit from "../_svg/edit.svg";
import { push } from "connected-react-router";
import { connect } from "react-redux";

const Item = ({
	item,
	index,
	expanded,
	setExpanded,
	renderChild,
	push,
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

		return children.map((el, i) =>
			renderChild(el, i, innerExpanded, setInnerExpanded),
		);
	};

	/**
	 *
	 * @param id
	 */
	const changePosition = id => {
		push(`./?change_position=${id}`);
	};

	/**
	 *
	 * @param item
	 * @returns {*}
	 */
	const renderEmployee = ({
		id,
		name,
		last_assessment_date,
		position,
	}) => {
		return (
			<div
				key={id}
				className={css.employee}
				onClick={() => changePosition(id)}
			>
				<div className={css.name}>
					{name}{" "}
					<span className={css.date}>
						({last_assessment_date})
					</span>
				</div>

				<div className={css.position}>
					{position}

					<PermissionController allowed={[HR_PERMISSION]}>
						<Edit
							className={css.edit}
							height={7}
							width={7}
						/>
					</PermissionController>
				</div>
			</div>
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

	return (
		<>
			<motion.header
				initial={false}
				animate={{
					backgroundColor: isOpen ? "#FFF" : "#EDEDED",
				}}
				onClick={() => setExpanded(isOpen ? false : index)}
				className={css.header}
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
			</motion.header>
			<AnimatePresence initial={false}>
				{isOpen && (
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
				)}
			</AnimatePresence>
		</>
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
};

export default connect(null, { push })(Item);
