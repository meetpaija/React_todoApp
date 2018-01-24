import React, { Component } from 'react';
import DeleteTODO from './Delete TODO/DeleteTODO';
import EditTODO from './EditTODO';
class TodoListRow extends Component{

  state={
    EditClicked: false
  }
  
    render()
    {
      return(
        <tr>
      <td>{this.props.item.description}</td>
        <td>{this.props.item.createdon}</td>
        <td>{this.props.item.modifiedon}</td>
        <td><button className="btn btn-primary btn-sm" id={this.props.item.id}>Edit</button></td>
        <td><button className="btn btn-danger btn-sm" id={this.props.item.id}>Delete</button></td>
        </tr>  
       
      );
    }
  }

  export default TodoListRow;