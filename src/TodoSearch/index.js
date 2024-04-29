import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  return (
    <TodoContext.Consumer>
      {({ searchValue, setSearchValue }) => (
        <input
          className="TodoSearch"
          placeholder="Launch rocket to the moon..."
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      )}
    </TodoContext.Consumer>
  );
}

export { TodoSearch };
