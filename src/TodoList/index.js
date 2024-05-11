import './TodoList.css';

function TodoList({
  error,
  loading,
  totalTodos,
  searchText,
  searchedTodos,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchResults,
  render,
  children,
}) {
  const renderFunc = children || render;

  return (
    <section className="TodoList-container">
      {error && onError()}

      {loading && onLoading()}

      {!loading && !totalTodos && onEmptyTodos()}

      {!!totalTodos &&
        !searchedTodos.length &&
        onEmptySearchResults(searchText)}

      {!loading && !error && (
        <ul className="TodoList">{searchedTodos.map(renderFunc)}</ul>
      )}
    </section>
  );
}

export { TodoList };
