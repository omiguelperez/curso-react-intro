import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    syncItem: syncTodos,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return {
    state: {
      error,
      loading,
      searchedTodos,
      totalTodos,
      completedTodos,
      searchValue,
      openModal,
    },
    stateUpdaters: {
      completeTodo,
      deleteTodo,
      addTodo,
      setOpenModal,
      setSearchValue,
      syncTodos,
    },
  };
}

export { useTodos };
