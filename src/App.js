import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Tag from './components/Tag'

export default class App extends Component {
	render() {
		return <Switch>
			<Route path="/:id" component={Tag} />
			<Route path="/" component={Home} />
		</Switch>
	}
}



