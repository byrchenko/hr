import React from "react";
import css from "./App.scss";

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
                {this.renderTestComponent()}
            </div>
        )
    }
}

export default App;
