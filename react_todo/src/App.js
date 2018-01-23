import React, { Component } from 'react';
import TodoList from '../src/TodoList'
import CreateTODO from '../src/CreateTODO'

 class App extends Component {
     render(){
       return(
         <div className="App">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
              <div className="container-fluid ">    
                <div className="row content" >
                  <div className="col-sm-4 sidenav"> 
                 <CreateTODO/>
                 </div>
                 <div className="col-sm-2 leftnav">
                 <div>
                 <TodoList/>
                 </div> 
                 </div>
                 </div>
                 </div>
            </div>
       );
    }
}

export default App;
