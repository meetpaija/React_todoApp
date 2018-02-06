import React from 'react';
import PropTypes from 'prop-types'
import DeleteTODO from './DeleteTODO';
import EditTODO from './EditTODO';
const TodoListRow = ({todo}) => {
  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>{todo.createdon}</td>
      <td>{todo.modifiedon}</td>
      <EditTODO todo={todo} />
      <DeleteTODO todo={todo} />
    </tr>
  );
}
TodoListRow.propTypes = {
  todo: PropTypes.object.isRequired
};
export default TodoListRow;