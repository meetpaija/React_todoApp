import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import TodoList from './TodoList'
import PropTypes from 'prop-types'
import Header from '../common/Header'
import * as todoActions from '../actions/todoActions';
class TodoPage extends Component {

  render() {
    // const store=configureStore();
    // store.dispatch(loadTodos());
    const todos = this.props.todos;
    return (
      <div className="container">
        <Header/>
        <TodoList todos={todos} />
      </div>
    );
  }
}


TodoPage.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
 
  return {
    todos: state.todo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);