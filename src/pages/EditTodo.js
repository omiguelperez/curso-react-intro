import { useParams } from 'react-router-dom';
import { TodoForm } from '../components/TodoForm';
import { useTodos } from '../hooks/useTodos';

function EditTodo() {
  const { id } = useParams();
  const {
    stateUpdaters: { editTodo },
  } = useTodos();

  return (
    <>
      <TodoForm
        formTitle="Edit your TODO task"
        submitText="Edit"
        submitEvent={(newText) => editTodo(id, newText)}
      />
    </>
  );
}

export { EditTodo };
