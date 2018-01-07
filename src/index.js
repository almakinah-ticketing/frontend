import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import createStore from './configureStore';
import history from './history';
import setAuthorizationData from './setAuthorizationData';
import { LastLocationProvider } from 'react-router-last-location';

const store = createStore();

setAuthorizationData(store);

ReactDOM.render(<Provider store={store}><Router history={history}><LastLocationProvider><App /></LastLocationProvider></Router></Provider>, document.getElementById('root'));
registerServiceWorker();