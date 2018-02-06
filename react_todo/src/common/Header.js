import React from 'react';
import {Link,IndexLink} from 'react-router';
class Header extends React.Component{
    render(){
        return(
            <nav >
            <hr/>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/todos" activeClassName="active">Todos</Link>
            <hr/>
          </nav>
     
        );
    }
}
export default Header;