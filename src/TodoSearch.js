import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');

  console.log(`Users are searching for: ${searchValue}`);

  return (
    <input
      className="TodoSearch"
      placeholder="Launch rocket to the moon..."
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
