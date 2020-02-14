import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import Wrapper from "./Wrapper";
import List from "./List";
import Selected from "./Selected";
import Item from "./Item";
import Add from "./Add";
import Search from "./Search";

class SelectUserInput extends React.Component {

	/**
	 *
	 * @param props
	 */
	constructor(props) {
		super(props);

		this.state = {
			selected: [
				{
					id: 1,
					name: "vasya pupkin",
				},
				{
					id: 2,
					name: "vasya pupkin",
				},
			],
			filter: null,
			isSearching: false,
		};

		this.list = React.createRef();
		this.input = React.createRef();
		this._isSearchClick = this._isSearchClick.bind(this);
	}

	/**
	 *
	 * @param e
	 * @private
	 */
	_isSearchClick(e) {
		if (
			e.target === this.list.current ||
			e.target === this.input.current
		) {
			return null;
		}

		this.endSearch()();
	}

	/**
	 *
	 */
	startSearch() {
		return () => {
			this.setState({
				isSearching: true,
			});

			document.addEventListener("click", this._isSearchClick);
		};
	}

	/**
	 *
	 * @returns {function(...[*]=)}
	 */
	endSearch() {
		return () => {
			this.setState({
				isSearching: false,
			});

			document.removeEventListener("click", this._isSearchClick);
		};
	}

	/**
	 * Changing search filter
	 */
	changeFilter() {
		return value => {
			this.setState({
				filter: value,
			});
		};
	}

	/**
	 * Display "add" button or searching input
	 */
	renderAdd() {
		const { isSearching, filter } = this.state;

		return () => {
			if (!isSearching) {
				return (
					<Add startSearch={this.startSearch()}/>
				);
			}

			return (
				<Search
					refNode={this.input}
					value={filter}
					changeFilter={this.changeFilter()}
				/>
			);
		};
	}

	/**
	 * Remove user from selected
	 */
	removeSelected() {
		return id => {
			this.setState(prevState => {
				const { selected } = prevState;

				if (!Array.isArray(selected)) {
					return null;
				}

				return {
					selected: selected.filter(el => el.id !== id),
				};
			});
		};
	}

	/**
	 * Selected user
	 */
	renderSelectedItem() {
		return item => {
			return (
				<Selected
					key={item.id}
					remove={this.removeSelected()}
					name={item.name}
					id={item.id}
				/>
			);
		};
	}

	/**
	 * Selected users list
	 */
	renderSelectedList() {
		return () => {
			const { selected } = this.state;

			if (!selected) {
				return null;
			}

			return selected.map(this.renderSelectedItem());
		};
	}

	/**
	 * Filter users list while input
	 */
	filterUsersList() {
		const { list } = this.props;
		const { filter } = this.state;

		return () => {
			if (!filter) {
				return list;
			}

			return list.filter(item => {
				const fullName = `${item.name} ${item.last_name}`;

				return fullName
					.toLowerCase()
					.includes(filter.toLowerCase());
			});
		};
	}

	/**
	 * Select user
	 */
	selectUser() {
		return user => {
			this.setState(prevState => {
				const { selected } = prevState;

				if (!selected) {
					return {
						selected: [user],
					};
				}

				selected.push(user);

				return {
					selected,
				};
			});
		};
	}

	/**
	 * Search users item
	 */
	renderUserItem() {
		return item => {
			return (
				<Item
					key={item.id}
					selectUser={this.selectUser()}
					item={item}
				/>
			);
		};
	}

	/**
	 * Search users list
	 */
	renderUsersList() {
		const list = this.filterUsersList()();
		const { isSearching } = this.state;

		return () => {
			if (!list || !isSearching) {
				return null;
			}

			return (
				<List
					refNode={this.list}
					list={list}
					renderItem={this.renderUserItem()}
				/>
			);
		};
	}


	/**
	 *
	 */
	render() {
		return (
			<Wrapper
				renderAdd={this.renderAdd()}
				renderUsers={this.renderUsersList()}
				renderSelected={this.renderSelectedList()}
			/>
		);
	}
}

/**
 *
 */
SelectUserInput.propTypes = {
	list: PropTypes.array,
};

export default SelectUserInput;