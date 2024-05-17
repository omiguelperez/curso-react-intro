import React from 'react';
import { TodoList } from '../components/TodoList';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodosLoading } from '../components/TodosLoading';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodosError } from '../components/TodosError';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { TodoHeader } from '../components/TodoHeader';
import { ChangeAlert } from '../components/ChangeAlert';
import { useTodos } from '../hooks/useTodos';

function Home() {
  const { state, stateUpdaters } = useTodos();
  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    openModal,
    completedTodos,
    searchValue,
  } = state;

  const {
    completeTodo,
    deleteTodo,
    addTodo,
    setOpenModal,
    setSearchValue,
    syncTodos,
  } = stateUpdaters;

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
            onEdit={() => console.log('Editing...')}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      <ChangeAlert sync={syncTodos} />

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
}

export { Home };
