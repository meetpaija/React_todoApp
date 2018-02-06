import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import TodoForm from './TodoForm'
import * as todoActions from '../actions/todoActions';
class CreateTODO extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: Object.assign({}, props.todo)
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    const field = event.target.name;
    let todo = Object.assign({}, this.state.todo);
    todo[field] = event.target.value;
    return this.setState({ todo: todo });
  };

  handleSubmit() {
    this.props.actions.createTodo(this.state.todo);
   
  }

  render() {
    return (
    <div>
      <TodoForm
        onChange={this.handleChange}
        onSave={this.handleSubmit}
        todo={this.state.todo}
      />
      </div>
    );
  }
}


CreateTODO.propTypes = {
  todo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

CreateTODO.contextTypes={
  router: PropTypes.object
}

function mapStateToProps(state, ownProps) {
  let todo = { title: '', description: '', createdon: '', modifiedon: '' };
  return {
    todo: todo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTODO);