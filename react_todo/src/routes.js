import React from 'react';
import {Route,Router} from 'react-router'
import App from './components/App'
import TodoPage from './components/TodoPage';

const Routes=(props)=>{
    return(<Router {...props}>
        <Route path="/" component={App}/>
            <Route path="/todos" component={TodoPage}/>
     </Router>);
}

export default Routes;