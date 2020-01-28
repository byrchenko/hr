import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { classNamesShape } from "react-transition-group/cjs/utils/PropTypes";

/**
 *
 * @param item
 * @returns {boolean}
 */
const isValid = item => {
	return !(item === null || item === undefined);
};

/**
 *
 * @param allowed
 * @param disallowed
 * @param role
 * @param children
 * @returns {null|*}
 * @constructor
 */
const Controller = ({ allowed, disallowed, role, children }) => {
	if (isValid(allowed)) {
		if (!allowed.includes(role)) {
			return null;
		}

		return children;
	}

	if (isValid(disallowed)) {
		if (disallowed.includes(role)) {
			return null;
		}

		return children;
	}

	return children;
};

/**
 *
 */
Controller.propTypes = {
	allowed: PropTypes.array,
	disallowed: PropTypes.array,
};

/**
 *
 */
Controller.defaultProps = {
	allowed: null,
	disallowed: null,
};

/**
 *
 * @param state
 * @returns {{role: *}}
 */
const mapState = state => {
	const {
		employee: { data },
	} = state;

	if (!isValid(data)) {
		return null;
	}

	const { role } = data;

	return {
		role,
	};
};

export default connect(mapState)(Controller);
