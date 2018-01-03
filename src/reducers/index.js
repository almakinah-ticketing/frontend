import {combineReducers} from 'redux';
import categories from './categories';
import hotestEvent from './hotestEvent';
import events from './events';
import event from './event';
import ticketTypes from './ticketTypes';
import ticketsCounter from './ticketsCounter';

const rootReducer = combineReducers({
	categories,
	hotestEvent,
	events,
	event,
	ticketTypes,
	ticketsCounter
})

export default rootReducer;