import React from 'react';
import PropTypes from 'prop-types'
import TodoListRow from './TodoListRow';
const TodoList = ({todos}) => {
 
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Created on</th>
          <th>Modified on</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo)=>(
          <TodoListRow key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  );
}

TodoList.prototype = {
  todos: PropTypes.array.isRequired
};

export default TodoList;