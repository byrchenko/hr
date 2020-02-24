import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import { connect } from "react-redux";
import Item from "./Item";
import Preloader from "../Preloader";
import { fetchAssessmentProcessData } from "../_actions/assessmentProcess";
import { loadPositions } from "../_actions/positions";
import { selectUsers } from "../_selectors/employees";

class AssessmentProcess extends React.Component {

	componentDidMount() {
		const {fetchData, fetchPositions} = this.props;

		fetchData();
		fetchPositions();
	}

	renderItem(item) {
		return (
			<Item
				key={item.id}
				item={item}
			/>
		)
	}

	/**
	 *
	 */
	renderList() {
		const {list} = this.props;

		if(!list) {
			return null;
		}

		return list.map(this.renderItem, this);
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const {list, loading, error} = this.props;

		if (loading) {
			return (
				<Preloader />
			)
		}

		if (error) {
			return (
				<div className={css.error}>
					Error occurred! :(
				</div>
			)
		}

		if(!list || !list.length) {
			return (
				<div className={css.empty}>
					Nothing found..
				</div>
			)
		}

		return (
			<div className={css.index}>
				<div className={css.header}>
					<div className={css.cell}>
						Наименование оценивания
					</div>

					<div className={css.cell}>
						Кол-во сотрудников
					</div>

					<div className={css.cell}>
						Дата начала
					</div>

					<div className={css.cell}>
						Дата завершения
					</div>
				</div>

				{this.renderList()}
			</div>
		);
	}
}

/**
 *
 */
AssessmentProcess.propTypes = {
	list: PropTypes.array,
	error: PropTypes.bool,
	loading: PropTypes.bool,
};

/**
 *
 */
const mapState = state => {
	const {
		assessmentProcess: {
			data,
			error,
			loading
		}
	} = state;

	return {
		list: Array.isArray(data) ? data : null,
		error,
		loading,
	}
};

/**
 *
 */
const mapDispatch = dispatch => {
	return {
		fetchData: () => dispatch(fetchAssessmentProcessData()),
		fetchPositions: () => dispatch(loadPositions())
	}
};

export default connect(mapState, mapDispatch)(AssessmentProcess);