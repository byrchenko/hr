import React from "react";
import PropTypes from "prop-types";
import css from "./Home.scss";
import Api from "../_service/ApiInterface";
import TwoColumnLayout from "../_layout/TwoColumn";

class Home extends React.Component {

	componentDidMount() {
		Api._sendPost('https://portal.veloplaneta.com.ua/hr/', {
			hello: 'world'
		})
			.then(result => result.text())
			.then(text => console.log(text))
			.catch(err => console.warn(err));
	}

	render() {
		return (
			<TwoColumnLayout>
				<div className={css.index}>
					{"Home"}
				</div>
			</TwoColumnLayout>
		);
	}
}

export default Home;