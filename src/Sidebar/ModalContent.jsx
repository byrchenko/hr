import React from "react";
import PropTypes from "prop-types";
import css from "./ModalContent.scss";
import text from "./locale/ru";
import list from "../_api/positions";
import { AnimatePresence, motion } from "framer-motion";
import Triangle from "../_svg/triangle_down.svg";
import { connect } from "react-redux";
import { setNewPosition } from "../_actions";
import ModalButtons from "../ModalButtons";

const ModalContent = ({ setNewPosition, error, handleSubmit, type }) => {
	const listRef = React.useRef();

	const [selected, setSelected] = React.useState(null);
	const [isOpened, setIsOpened] = React.useState(false);

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

		if (list === null || list === undefined) {
			return null;
		}

		return (
			<ul ref={listRef} className={css.list}>
				{list.map(renderItem)}
			</ul>
		);
	}

	/**
	 *
	 */
	function renderSelectedItem() {
		if (selected === null) {
			return list[0].title;
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

/**
 *
 * @param dispatch
 * @returns {{setNewPosition: (function(*=): *)}}
 */
const mapDispatch = dispatch => {
	return {
		setNewPosition: position =>
			dispatch(setNewPosition(position)),
	};
};

export default connect(null, mapDispatch)(ModalContent);
