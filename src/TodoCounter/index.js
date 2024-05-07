import './TodoCounter.css';

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <h1 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}>
      You have completed <span>{completedTodos}</span> of
      <span> {totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
