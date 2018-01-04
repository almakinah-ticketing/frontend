import {combineReducers} from 'redux';
import categories from './categories';
import events from './events';
import event from './event';
import attendee from './attendee';

const rootReducer = combineReducers({
  categories,
  events,
  event,
  attendee
})

export default rootReducer;