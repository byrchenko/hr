import React from "react";
import PropTypes from "prop-types";
import css from "./Item.scss";
import Dots from "../_svg/dots.svg";
import Hide from "../_svg/hide.svg";

class Item extends React.Component {

	/**
	 *
	 */
	constructor() {
		super();

		this.state = {
			isTooltip: false,
		};

		this.tooltip = React.createRef();
		this._closeWhenClickedOutside = this._closeWhenClickedOutside.bind(this);
	}

	/**
	 *
	 * @returns {null|*}
	 */
	renderDescription() {
		const { item: { description } } = this.props;

		if (!description) {
			return null;
		}

		return (
			<div className={css.description}>
				{description}
			</div>
		);
	}

	/**
	 *
	 * @returns {null}
	 * @private
	 */
	_closeWhenClickedOutside(e) {
		if (this.tooltip.current.contains(e.target)) {
			return null;
		}

		this.setState({
			isTooltip: false,
		});

		document.removeEventListener(
			"click",
			this._closeWhenClickedOutside,
		);
	}

	/**
	 *
	 */
	openTooltip() {
		return e => {
			e.stopPropagation();

			this.setState({
				isTooltip: true,
			});

			document.addEventListener(
				"click",
				this._closeWhenClickedOutside,
			);
		};
	}

	/**
	 *
	 */
	closeTooltip() {
		return e => {
			e.stopPropagation();

			document.removeEventListener(
				"click",
				this._closeWhenClickedOutside,
			);

			this.setState({
				isTooltip: false,
			});
		};
	}

	/**
	 *
	 * @returns {*}
	 */
	renderTooltip() {
		const { edit, remove, item } = this.props;
		const { isTooltip } = this.state;

		if (!isTooltip) {
			return null;
		}

		return (
			<div
				className={css.tooltip}
				ref={this.tooltip}
			>
				<div
					className={css.close}
					onClick={this.closeTooltip()}
				>
					<Hide
						height={9}
						width={9}
					/>
				</div>

				<ul className={css.list}>
					<li
						className={css.item}
						onClick={e => {
							e.stopPropagation();
							edit(item);
						}}
					>
						{"Редактировать"}
					</li>

					<li
						className={css.item}
						onClick={e => {
							e.stopPropagation();
							remove();
						}}
					>
						{"Удалить"}
					</li>
				</ul>
			</div>
		);
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const {
			filter,
			item,
			select,
		} = this.props;

		const wrapperClass = filter === item.id
			? css.selected
			: css.index;

		return (
			<div
				className={wrapperClass}
				onClick={select
					? () => select(item.id)
					: null
				}
			>
				<div className={css.title}>
					{item.title}
				</div>

				{this.renderDescription()}

				{this.renderTooltip()}

				<div
					className={css.options}
					onClick={this.openTooltip()}
				>
					<Dots
						width={4}
						height={14}
					/>
				</div>
			</div>
		);
	}
}

/**
 *
 */
Item.propTypes = {
	item: PropTypes.object,
	select: PropTypes.func,
	edit: PropTypes.func,
	remove: PropTypes.func,
	filter: PropTypes.any,
};

export default Item;