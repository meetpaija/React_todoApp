import React, { Component}  from 'react';
import Header from '../common/Header'
import CreateTODO from './CreateTODO';
 class App extends Component {
     render(){
       return(
         <div className="container">
            {this.props.children} 
               <Header/>
              <CreateTODO/>
          </div>
       );
    }
}

export default App;
