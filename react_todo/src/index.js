import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css';
import App from './components/App.js'
import registerServiceWorker from './other js/registerServiceWorker';
// import Axios from Axios;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
