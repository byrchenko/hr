import React from "react";
import css from "./index.scss";
import PreloaderIcon from "../_svg/preloader.svg";

class Preloader extends React.Component {

	render() {
		return (
			<div className={css.index}>
				<PreloaderIcon width={64} height={64} />
			</div>
		);
	}
}

export default Preloader;