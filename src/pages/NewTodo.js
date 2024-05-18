import { useTodos } from '../hooks/useTodos';
import { TodoForm } from '../components/TodoForm';

function NewTodo() {
  const {
    stateUpdaters: { addTodo },
  } = useTodos();

  return (
    <>
      <TodoForm
        formTitle="Write a new TODO task"
        submitText="Add"
        submitEvent={addTodo}
      />
    </>
  );
}

export { NewTodo };
