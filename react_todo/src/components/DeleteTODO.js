import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as todoActions from '../actions/todoActions';
import PropTypes from 'prop-types'
class DeleteTODO extends Component{
  constructor(props) {
    super(props);
    this.state = {
      todo: Object.assign({}, props.todo)
    };
    this.deleteTodo=this.deleteTodo.bind(this);
  };

    deleteTodo=(e)=>{
      this.props.actions.deleteTodo(this.state.todo);
    }

    render(){
        return(
           <td><button className="btn btn-danger btn-sm"  id={this.state.todo.id} onClick={this.deleteTodo.bind(this)}>Delete</button></td>
       );
    }

}

DeleteTODO.propTypes = {
  todo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  let todo = { id:ownProps.todo.id ,title: ownProps.todo.title, description: ownProps.todo.description, createdon: ownProps.todo.createdon, modifiedon: '' };
  return {
    todo: todo
  };
}

function mapDispatchToProps(dispatch) {
  
  return {
    actions: bindActionCreators(todoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTODO);