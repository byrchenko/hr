import React from "react";
import PropTypes from "prop-types";
import css from "./Popup.scss";
import ModalButtons from "../ModalButtons";
import { getDefaultData, labels } from "./config";

import {
	ADD_POSITION_POPUP,
	EDIT_POSITION_POPUP,
} from "../Popuper/popups";

/**
 * Description input in Popup
 *
 * @param type
 * @param description
 * @param setDescription
 * @returns {null|*}
 * @constructor
 */
function Description(
	{
		type,
		description,
		setDescription,
	},
) {
	if (
		type === ADD_POSITION_POPUP ||
		type === EDIT_POSITION_POPUP
	) {
		return null;
	}

	return (
		<div className={css.group}>
			<label
				className={css.label}
				htmlFor="description"
			>
				{labels[type].description}
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
	);
}

/**
 *
 */
Description.propTypes = {
	type: PropTypes.string,
	description: PropTypes.string,
	setDescription: PropTypes.func,
};

/**
 *
 * @param type
 * @param params
 * @returns {*}
 * @constructor
 */
const Popup = ({ type, params }) => {
	const defaultData = getDefaultData(type, params);

	const [title, setTitle] = React.useState(defaultData.title);
	const [
		description,
		setDescription
	] = React.useState(defaultData.description);

	return (
		<div className={css.index}>
			<div className={css.group}>
				<label
					className={css.label}
					htmlFor="title"
				>
					{labels[type].title}
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
	params: PropTypes.object,
};

export default Popup;