import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as todoActions from '../actions/todoActions';
import PropTypes from 'prop-types'
class EditTODO extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: Object.assign({}, props.todo)
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  };


  handleChange=(event)=>{
    const field = event.target.name;
    let todo = Object.assign({}, this.state.todo);
    todo[field] = event.target.value;
    return this.setState({ todo: todo });
  }

  handleSubmit=(event)=>{
    this.props.actions.editTodo(this.state.todo);
  }

  render() {
   // console.log("In EditTODO::",this.state.todo.id);
    return (
      <td><button className="btn btn-primary btn-sm" id={this.state.todo.id} data-toggle="modal" data-target={`#${this.state.todo.id}myModal`} >Edit</button>
        <div id={`${this.state.todo.id}myModal`} className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Edit todo</h4>
              </div>
              <div className="modal-body">
                <div> Title: <input type="text" name="title" value={this.state.todo.title} onChange={this.handleChange}></input></div><br />
                <div>Description: <input type="text" name="description" value={this.state.todo.description} onChange={this.handleChange}></input></div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={this.handleSubmit} data-dismiss="modal">Save</button>
              </div>
            </div>

          </div>
        </div>
      </td>
    );
  }
}


EditTODO.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EditTODO);


