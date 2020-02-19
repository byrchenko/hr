import React from "react";
import PropTypes from "prop-types";
import css from "./ModalContent.scss";
import text from "./locale/ru";
import Triangle from "../_svg/triangle_down.svg";
import { connect } from "react-redux";
import { setNewPosition } from "../_actions";
import ModalButtons from "../ModalButtons";
import ApiInterface from "../_service/ApiInterface";

/**
 *
 * @param setNewPosition
 * @param error
 * @param handleSubmit
 * @param type
 * @returns {*}
 * @constructor
 */
const ModalContent = ({ setNewPosition, error, handleSubmit, type, data, fetchPositions }) => {
	const listRef = React.useRef();

	const [selected, setSelected] = React.useState(null);
	const [isOpened, setIsOpened] = React.useState(false);

	React.useEffect(() => {
		fetchPositions()
	}, []);

	if (!data) {
		return null;
	}

	/**
	 *
	 */
	function selectItem(item) {
		setSelected(item);
		setIsOpened(false);
		setNewPosition(item.id);
	}

	/**
	 *
	 * @param e
	 */
	function closeSelect(e) {
		if (!e.target.closest(css.list) || e.target !== listRef) {
			setIsOpened(false);

			document.removeEventListener("click", closeSelect);
		}
	}

	/**
	 *
	 */
	function toggleSelect() {
		if (!isOpened) {
			document.addEventListener("click", closeSelect);
		}

		setIsOpened(!isOpened);
	}

	/**
	 *
	 */
	function renderItem(item) {
		return (
			<li
				className={css.item}
				onClick={() => selectItem(item)}
				key={item.id}
			>
				{item.title}
			</li>
		);
	}

	/**
	 *
	 */
	function renderList() {
		if (!isOpened) {
			return null;
		}

		return (
			<ul ref={listRef} className={css.list}>
				{data.map(renderItem)}
			</ul>
		);
	}

	/**
	 *
	 */
	function renderSelectedItem() {
		if (selected === null) {
			return data[0].title;
		}

		return selected.title;
	}

	/**
	 *
	 * @returns {*}
	 */
	function renderError() {
		if (error) {
			return (
				<div className={css.error}>
					Произошла ошибка! Попробуйте еще раз
				</div>
			);
		}
	}

	/**
	 *
	 */
	return (
		<div className={css.index}>
			<label className={css.label} htmlFor="#position">
				{text.positionLabel}
			</label>

			<div className={css.select}>
				<div className={css.selected} onClick={toggleSelect}>
					{renderSelectedItem()}

					<Triangle
						className={css.triangle}
						width={9}
						height={6}
					/>
				</div>

				{renderList()}
			</div>

			<ModalButtons
				submit={handleSubmit}
				type={type}
			/>

			{renderError()}
		</div>
	);
};

ModalContent.propTypes = {
	setNewPosition: PropTypes.func,
	handleSubmit: PropTypes.func,
	type: PropTypes.string,
	error: PropTypes.bool,
};

const mapState = state => {
	const {
		positions: {
			data,
			loading
		}
	} = state;

	return {
		data,
		loading
	}
};

/**
 *
 * @param dispatch
 * @returns {{setNewPosition: (function(*=): *)}}
 */
const mapDispatch = dispatch => {
	return {
		setNewPosition: position =>
			dispatch(setNewPosition(position)),
		fetchPositions: () => dispatch(ApiInterface.fetchPositions())
	};
};

export default connect(mapState, mapDispatch)(ModalContent);
