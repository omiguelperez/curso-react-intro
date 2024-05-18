import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoList } from '../components/TodoList';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodosLoading } from '../components/TodosLoading';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodosError } from '../components/TodosError';
import { TodoHeader } from '../components/TodoHeader';
import { ChangeAlert } from '../components/ChangeAlert';
import { useTodos } from '../hooks/useTodos';

function Home() {
  const navigate = useNavigate();
  const { state, stateUpdaters } = useTodos();
  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue,
  } = state;

  const { completeTodo, deleteTodo, setSearchValue, syncTodos } = stateUpdaters;

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchText={searchValue}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No results for {searchText}</p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onEdit={() =>
              navigate(`/edit/${todo.id}`, {
                state: { todo },
              })
            }
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>

      <CreateTodoButton onClick={() => navigate('/new')} />

      <ChangeAlert sync={syncTodos} />
    </>
  );
}

export { Home };
