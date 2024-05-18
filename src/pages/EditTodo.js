import { useParams } from 'react-router-dom';
import { TodoForm } from '../components/TodoForm';
import { useTodos } from '../hooks/useTodos';

function EditTodo() {
  const { id } = useParams();
  const {
    state: { loading },
    stateUpdaters: { editTodo, getTodo },
  } = useTodos();

  if (loading) {
    return <p>Loading...</p>;
  } else {
    const todo = getTodo(id);
    return (
      <>
        <TodoForm
          formTitle="Edit your TODO task"
          submitText="Edit"
          defaultTodoText={todo?.text}
          submitEvent={(newText) => editTodo(id, newText)}
        />
      </>
    );
  }
}

export { EditTodo };
