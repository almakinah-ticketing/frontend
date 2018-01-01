import {combineReducers} from 'redux';
import categories from './categories';
import hotestEvent from './hotestEvent';
import events from './events';
import ticketTypes from './ticketTypes';
import ticketsCounter from './ticketsCounter';

const rootReducer = combineReducers({
	categories,
	hotestEvent,
	events,
	ticketTypes,
	ticketsCounter

 
})

export default rootReducer;