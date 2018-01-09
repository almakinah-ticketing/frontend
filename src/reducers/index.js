import {combineReducers} from 'redux';
import categories from './categories';
import events from './events';
import event from './event';
import ticketTypes from './ticketTypes';
import attendee from './attendees';
import authentication from './authentication';
import adminActivities from './adminActivities';

const rootReducer = combineReducers({
  categories,
  events,
  event,
  ticketTypes,
  attendee,
  authentication,
  adminActivities
})

export default rootReducer;