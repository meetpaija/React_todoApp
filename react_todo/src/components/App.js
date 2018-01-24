import React, { Component } from 'react';
import TodoList from '../components/TodoList'
import CreateTODO from '../components/CreateTODO'

 class App extends Component {
     render(){
       return(
         <div className="App">
              <div className="container-fluid ">    
                <div className="row content" >
                  <div className="col-sm-4 sidenav"> 
                    <CreateTODO/>
                  </div>
                  <div className="col-sm-2 leftnav">
                    <TodoList/>
                 </div>
                </div>
              </div>
          </div>
       );
    }
}

export default App;
