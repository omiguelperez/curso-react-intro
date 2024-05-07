import './TodoList.css';

function TodoList({
  error,
  loading,
  searchedTodos,
  onError,
  onLoading,
  onEmptyTodos,
  render,
}) {
  return (
    <section className="TodoList-container">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !searchedTodos.length && onEmptyTodos()}
      <ul className="TodoList">{searchedTodos.map(render)}</ul>
    </section>
  );
}

export { TodoList };
