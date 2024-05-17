import { useReducer, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { isSynchonized, item, loading, error } = state;

  const onError = (error) => {
    dispatch({ type: actionTypes.ERROR, payload: error });
  };

  const onSuccess = (item) => {
    dispatch({ type: actionTypes.SUCCESS, payload: item });
  };

  const onSave = (item) => {
    dispatch({ type: actionTypes.SAVE, payload: item });
  };

  const onSync = () => dispatch({ type: actionTypes.SYNC });

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
        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 1000);
  }, [isSynchonized]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const syncItem = () => onSync();

  return {
    item,
    error,
    loading,
    saveItem,
    syncItem,
  };
}

const initialState = ({ initialValue }) => ({
  isSynchorized: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  SAVE: 'SAVE',
  SYNC: 'SYNC',
};

const reducerObject = (state, payload) => ({
  [actionTypes.ERROR]: { ...state, loading: false, error: true },
  [actionTypes.SUCCESS]: {
    ...state,
    item: payload,
    error: false,
    loading: false,
    isSynchonized: true,
  },
  [actionTypes.SAVE]: { ...state, item: payload },
  [actionTypes.SYNC]: { ...state, loading: true, isSynchonized: false },
});

const reducer = (state, action) => {
  const { type, payload } = action;
  return reducerObject(state, payload)[type] || state;
};

export { useLocalStorage };
