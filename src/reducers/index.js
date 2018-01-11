import {combineReducers} from 'redux';
import categories from './categories';
import events from './events';
import event from './event';
import ticketTypes from './ticketTypes';
import attendee from './attendees';
import authentication from './authentication';
import history from './history'

const rootReducer = combineReducers({
  categories,
  events,
  event,
  ticketTypes,
  attendee,
  authentication,
  history
})

export default rootReducer;