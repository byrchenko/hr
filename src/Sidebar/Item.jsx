import React from "react";
import css from "./Item.scss";
import { motion, AnimatePresence } from "framer-motion";

const Item = ({
	item,
	index,
	expanded,
	setExpanded,
	renderChild,
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
	 * @param item
	 * @returns {*}
	 */
	const renderEmployee = item => {
		return (
			<div key={item.id} className={css.employee}>
				<div className={css.name}>
					{item.name}{" "}
					<span className={css.date}>
						({item.last_assessment_date})
					</span>
				</div>

				<div className={css.position}>{item.position}</div>
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

Item.propTypes = {};

Item.defaultProps = {};

export default Item;
