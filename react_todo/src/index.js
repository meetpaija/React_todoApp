import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {browserHistory} from 'react-router';
import registerServiceWorker from './other js/registerServiceWorker';
import './css/index.css'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {loadTodos} from './actions/todoActions'

const store=configureStore();
store.dispatch(loadTodos());

ReactDOM.render( 
<Provider store={store}>
<Routes history={browserHistory}/> 
</Provider>
, document.getElementById('root'));
registerServiceWorker();
