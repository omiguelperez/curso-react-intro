import { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [isSynchonized, setIsSynchronized] = useState(true);
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
        setIsSynchronized(true);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, [isSynchonized]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  const syncItem = () => {
    setLoading(true);
    setIsSynchronized(false);
  };

  return {
    item,
    saveItem,
    loading,
    error,
    syncItem,
  };
}

export { useLocalStorage };
