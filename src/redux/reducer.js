import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import tags from './tags'

console.log('tags', tags);

export default combineReducers({
	router, tags
})
