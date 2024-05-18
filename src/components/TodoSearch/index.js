import { useEffect } from 'react';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue,
  loading,
  searchParams,
  setSearchParams,
}) {
  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchValue(search);
    }
  }, [searchParams]);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    setSearchParams({ search: event.target.value });
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Launch rocket to the moon..."
      value={searchValue}
      onChange={(event) => onSearchValueChange(event)}
      disabled={loading}
    />
  );
}

export { TodoSearch };
