import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import promise from 'redux-promise';
import logger from 'redux-logger';

var middlewares = applyMiddleware(promise, logger);

if (process.env.NODE_ENV === 'production') {
  middlewares = applyMiddleware(promise);
}

const composer = compose(middlewares);

export default function(){
    return createStore(rootReducer, composer);
}