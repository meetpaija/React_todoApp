import React from 'react';
import PropTypes from 'prop-types'

const TodoForm = ({todo, onSave, onChange}) => {

  return (
    <form>
      <h1>Create Todo..</h1>
      <label>Title:</label><br/>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={onChange}/><br/>
    <label>Description:</label><br/>
      <input
        type="text"
        name="description"
        value={todo.description}
        onChange={onChange} />
    <br/><br/>
      <input
        type="submit"
        value="Save"
        className="btn btn-primary"
        onClick={onSave}/>
        
    </form>
  );
};

TodoForm.propTypes = {
  todo:PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired
};

export default TodoForm;
