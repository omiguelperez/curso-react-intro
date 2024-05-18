import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoForm.css';

function TodoForm({ formTitle, submitText, submitEvent }) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    submitEvent(newTodoValue);
    navigate('/');
  };

  const onCancel = () => navigate('/');

  const onChange = (event) => setNewTodoValue(event.target.value);

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="todo-text">{formTitle}</label>
      <textarea
        id="todo-txt"
        name="todo"
        placeholder="Go to the moon..."
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          {submitText}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
