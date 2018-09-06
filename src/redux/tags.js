import { LOAD_TAGS } from '../const';
import { dataTags } from '../dataTags';

const defaultState = dataTags;

console.log('defaultState', defaultState)
console.log( typeof(defaultState));
console.log('defaultState', defaultState[1]);

export default  (infoTable = defaultState, action) => {
	const { type } = action;
	switch (type) {
	case LOAD_TAGS: return infoTable
	}

	return infoTable
}
