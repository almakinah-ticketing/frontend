import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import createStore from './configureStore';
import history from './history';

const store = createStore();


ReactDOM.render(<Router history={history}><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));
registerServiceWorker();
