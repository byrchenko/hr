import React from "react";
import PropTypes from "prop-types";
import List from "./List";
import Wrapper from "./Wrapper";
import Item from "./Item";
import { connect } from "react-redux";
import nav from "./navigation";

class Navigation extends React.Component {
	/**
	 *
	 * @param item
	 * @returns {*}
	 */
	renderItem(item) {
		let isActive = false;

		const { pathname } = this.props;

		if (pathname === item.link) {
			isActive = true;
		}

		return (
			<Item
				title={item.title}
				link={item.link}
				isActive={isActive}
				key={item.link}
			/>
		);
	}

	/**
	 *
	 * @param list
	 * @returns {function(): *}
	 */
	renderList(list) {
		return () => {
			return list.map(this.renderItem, this);
		};
	}

	/**
	 *
	 * @param value
	 * @returns {boolean|boolean}
	 */
	isValid(value) {
		return value !== undefined && value !== null;
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const { role } = this.props;
		let list;

		if (this.isValid(role)) {
			list = nav[role];
		} else {
			list = nav.default;
		}

		return (
			<Wrapper>
				<List renderList={this.renderList(list)} />
			</Wrapper>
		);
	}
}

/**
 *
 * @param store
 * @returns {{role: null, pathname: *}|{role: *, pathname: *}}
 */
const mapState = store => {
	const {
		employee: { data },
		router: {
			location: { pathname },
		},
	} = store;

	if (data) {
		const { role } = data;

		return {
			role,
			pathname,
		};
	}

	return {
		role: null,
		pathname,
	};
};

export default connect(mapState)(Navigation);
