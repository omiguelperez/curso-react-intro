import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodosError } from '../TodosError';
import { TodoContext } from '../TodoContext';

function AppUI() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({ loading, error, searchedTodos, completeTodo, deleteTodo }) => (
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {!loading && !error && searchedTodos.length === 0 && <EmptyTodos />}
            {!loading && !!error && <TodosError />}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
