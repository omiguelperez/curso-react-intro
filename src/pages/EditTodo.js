import { useLocation, useParams } from 'react-router-dom';
import { TodoForm } from '../components/TodoForm';
import { useTodos } from '../hooks/useTodos';

function EditTodo() {
  const { id } = useParams();
  const location = useLocation();

  const {
    state: { loading },
    stateUpdaters: { editTodo, getTodo },
  } = useTodos();

  let defaultTodoText;
  if (location.state?.todo) {
    defaultTodoText = location.state.todo.text;
  } else if (loading) {
    return <p>Loading...</p>;
  } else {
    const todo = getTodo(id);
    defaultTodoText = todo.text;
  }

  return (
    <>
      <TodoForm
        formTitle="Edit your TODO task"
        submitText="Edit"
        defaultTodoText={defaultTodoText}
        submitEvent={(newText) => editTodo(id, newText)}
      />
    </>
  );
}

export { EditTodo };
