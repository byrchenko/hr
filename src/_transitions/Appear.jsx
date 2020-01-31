import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Appear = ({ keyValue, children }) => {
	return (
		<motion.div
			key={keyValue}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	);
};

/**
 *
 */
Appear.propTypes = {
	keyValue: PropTypes.string,
};

/**
 *
 */
Appear.defaultProps = {
	keyValue: "",
};

export default Appear;
