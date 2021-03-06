import React, { Component } from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import history from './history'

export default class Root extends Component {
	static propTypes = {

	};

	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<App />
				</Router>
			</Provider>
		)
	}
}


