import {combineReducers} from 'redux';
import categories from './categories';
import hotestEvent from './hotestEvent';
import events from './events';

const rootReducer = combineReducers({
	categories,
	hotestEvent,
	events
 
})

export default rootReducer;