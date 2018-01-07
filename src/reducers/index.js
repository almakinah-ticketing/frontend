import {combineReducers} from 'redux';
import categories from './categories';
import events from './events';
import event from './event';
import ticketTypes from './ticketTypes';
import ticketsCounter from './ticketsCounter';
import attendee from './attendees';
import authentication from './authentication';

const rootReducer = combineReducers({
  categories,
  events,
  event,
  ticketTypes,
  ticketsCounter,
  attendee,
  authentication
})

export default rootReducer;