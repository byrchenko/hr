import moment from "moment";

/**
 *
 * @param date
 * @returns {string}
 */
export function dateToStringEpoch(date) {
	return moment(date * 1000)
		.format("DD.MM.YYYY")
}

/**
 *
 * @param date
 * @returns {string}
 */
export function dateToString(date) {
	return moment(date)
		.format("DD.MM.YYYY")
}