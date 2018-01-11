import {combineReducers} from 'redux';
import categories from './categories';
import events from './events';
import ticketTypes from './ticketTypes';
import attendee from './attendees';
import authentication from './authentication';
import admins from './admins';
import adminActivities from './adminActivities';
import history from './history'

const rootReducer = combineReducers({
  categories,
  events,
  ticketTypes,
  attendee,
  authentication,
  admins,
  adminActivities,
  history
})

export default rootReducer;