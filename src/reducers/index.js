import {combineReducers} from 'redux';
import categories from './categories';
import hotestEvent from './hotestEvent';

const rootReducer = combineReducers({
	categories,
	hotestEvent

})

export default rootReducer;