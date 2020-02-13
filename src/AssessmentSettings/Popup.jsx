import React from "react";
import PropTypes from "prop-types";
import css from "./Popup.scss";
import ModalButtons from "../ModalButtons";
import { ADD_POSITION_POPUP, EDIT_BLOCK_POPUP, EDIT_COMPETENCY_POPUP, EDIT_POSITION_POPUP } from "../Popuper/popups";

/**
 *
 * @param type
 * @param description
 * @param setDescription
 * @returns {null|*}
 * @constructor
 */
function Description({type, description, setDescription}) {
	if (
		type === ADD_POSITION_POPUP ||
		type === EDIT_POSITION_POPUP
	) {
		return null
	}

	return (
		<div className={css.group}>
			<label
				className={css.label}
				htmlFor="description"
			>
				Label 2
			</label>

			<textarea
				className={css.text}
				id="description"
				rows="5"
				placeholder={"Описание"}
				value={description}
				onChange={e => setDescription(e.target.value)}
			/>
		</div>
	)
}

/**
 *
 * @param type
 * @param params
 * @returns {*}
 * @constructor
 */
const Popup = ({type, params}) => {
	let defaultTitle = '';
	let defaultDescription = '';

	switch (type) {
		case EDIT_POSITION_POPUP:
			defaultTitle = params.title;
			break;
		case EDIT_BLOCK_POPUP:
			defaultTitle = params.title;
			defaultDescription = params.description;
			break;
		case EDIT_COMPETENCY_POPUP:
			defaultTitle = params.title;
			defaultDescription = params.description;
			break;
	}

	const [title, setTitle] = React.useState(defaultTitle);
	const [description, setDescription] = React.useState(defaultDescription);

	return (
		<div className={css.index}>
			<div className={css.group}>
				<label
					className={css.label}
					htmlFor="title"
				>
					Label
				</label>

				<input
					className={css.input}
					type="text"
					id="title"
					placeholder={"Компетенция"}
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</div>

			<Description
				type={type}
				description={description}
				setDescription={setDescription}
			/>

			<ModalButtons
				submit={() => null}
				type={type}
			/>
		</div>
	);
};

/**
 *
 */
Popup.propTypes = {
	handleSubmit: PropTypes.func,
	type: PropTypes.string,
	params: PropTypes.object
};

export default Popup;