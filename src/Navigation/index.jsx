import React from "react";
import PropTypes from "prop-types";
import List from "./List";
import Wrapper from "./Wrapper";
import Item from "./Item";
import {connect} from "react-redux";

class Navigation extends React.Component {

	renderItem(item) {
		let isActive = false;

		const {pathname} = this.props;

		if(pathname === item.link) {
			isActive = true;
		}

		return (
			<Item
				title={item.title}
				link={item.link}
				isActive={isActive}
				key={item.link}
			/>
		)
	}

	renderList(list) {
		return () => {
			return list.map(this.renderItem, this);
		}
	}

	render() {
		const list = [
			{
				title: 'Главная',
				link: "/hr/"
			},
			{
				title: 'Настройки',
				link: "/hr/settings"
			},
			{
				title: 'Управление процессом оценки',
				link: "/hr/processing"
			},
		];

		return (
			<Wrapper>
				<List renderList={this.renderList(list)} />
			</Wrapper>
		);
	}
}

const mapState = store => {
	const {
		router: {
			location: {
				pathname
			}
		}
	} = store;

	return {
		pathname
	}
};

export default connect(mapState)(Navigation);