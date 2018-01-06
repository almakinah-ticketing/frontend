import {combineReducers} from 'redux';
import categories from './categories';
import events from './events';
import event from './event';
import attendee from './attendees';
import authentication from './authentication';

const rootReducer = combineReducers({
  categories,
  events,
  event,
  attendee,
  authentication
})

export default rootReducer;