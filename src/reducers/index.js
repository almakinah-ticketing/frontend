import {combineReducers} from 'redux';
import categories from './categories';
import events from './events';

const rootReducer = combineReducers({
  categories,
  events
})

export default rootReducer;