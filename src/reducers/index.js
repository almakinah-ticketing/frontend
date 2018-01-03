import {combineReducers} from 'redux';
import categories from './categories';
import events from './events';
import event from './event';

const rootReducer = combineReducers({
  categories,
  events,
  event 
})

export default rootReducer;