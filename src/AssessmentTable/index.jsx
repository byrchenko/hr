import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import List from "./List";
import { fetchDataSuccess } from "../_actions";
import { ASSESSMENT_TABLE_ENTITY } from "../_store/entities";
import css from "./index.scss";
import User from "../_svg/big_user.svg";
import Preloader from "../_svg/preloader.svg";
import ApiInterface from "../_service/ApiInterface";

class AssessmentTable extends React.Component {

	/**
	 *
	 */
	componentDidMount() {
		const { fetchList, userId } = this.props;

		fetchList(userId);
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const { data, error, loading } = this.props;

		if (loading) {
			return (
				<div className={css.loading}>
					<Preloader width={64} height={64}/>
				</div>
			);
		}

		if (error) {
			return (
				<div className={css.error}>
					Error! Try again later!
				</div>
			);
		}

		if (data === null || data === undefined) {
			return (
				<div className={css.empty}>
					<User width={85} height={87}/>

					<h3 className={css.text}>
						Сотрудники ожидающие проверки отсутствуют
					</h3>
				</div>
			);
		}

		return (
			<>
				<List list={data}/>
			</>
		);
	}
}

/**
 *
 * @param state
 * @returns {{list: *, loading: *, error: *}}
 */
const mapState = state => {
	const {
		assessmentEmployees: {
			data,
			error,
			loading,
		},
		employee: {
			id,
		},
	} = state;

	return {
		data,
		error,
		loading,
		userId: id,
	};
};

/**
 *
 * @param dispatch
 */
const mapDispatch = dispatch => {
	return {
		fetchList: id => ApiInterface.fetchAssessmentList(dispatch, id),
	};
};

export default connect(mapState, mapDispatch)(AssessmentTable);
