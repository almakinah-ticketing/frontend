import {combineReducers} from 'redux';
import categories from './categories';
import hotestEvent from './hotestEvent';
import events from './events';
import event from './event';

const rootReducer = combineReducers({
  categories,
  hotestEvent,
  events,
  event 
})

export default rootReducer;