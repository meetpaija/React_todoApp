import React, { Component } from 'react';
import DeleteTODO from './DeleteTODO';
import EditTODO from './EditTODO';
class TodoListRow extends Component{

  state={
    EditClicked: false
  }
  
    render()
    {
      return(
        <tr>
          <td>{this.props.item.title}</td>
        <td>{this.props.item.description}</td>
        <td>{this.props.item.createdon}</td>
        <td>{this.props.item.modifiedon}</td>
        <EditTODO item={this.props.item}/>
        <DeleteTODO item={this.props.item}/>
        </tr>  
       
      );
    }
  }

  export default TodoListRow;