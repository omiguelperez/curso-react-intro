import React from 'react';
import { TodoList } from '../TodoList';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodosError } from '../TodosError';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    addTodo,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
          loading={loading}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
        />
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
          <p>No hay resultados para {searchText}</p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
}

export default App;
