import { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        saveItem(parsedItem);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Make food', completed: true },
//   { text: 'Take the React.js course', completed: false },
//   { text: 'Build and deploy a sample project', completed: true },
//   { text: 'Take the Node.js course', completed: true },
//   { text: 'Take the NLP course', completed: false },
//   { text: 'Take the Python course', completed: true },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
