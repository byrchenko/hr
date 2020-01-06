import React from "react";
import css from "./App.scss";
import {Provider} from "react-redux";
import store from "./_store";

class App extends React.Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            component: null
        }
    }

    /**
     *
     */
    componentDidMount() {
        import("./Test")
            .then(component => {
                this.setState({component: component.default})
            });
    }

	/**
	 *
	 * @returns {null|*}
	 */
	renderTestComponent() {
		const {component: Component} = this.state;

		if (!Component) {
			/*
			 * TODO: create Loading component
			 * return <Loading />
			*/

			return null;
		}

		return <Component />
	}

    /**
     *
     */
    render() {
        return (
            <div className={css.index}>
				<Provider store={store}>
					{this.renderTestComponent()}
				</Provider>
            </div>
        )
    }
}

export default App;
