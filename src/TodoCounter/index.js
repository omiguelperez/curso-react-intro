import './TodoCounter.css';

function TodoCounter({ completedTodos, totalTodos }) {
  return (
    <h1 className="TodoCounter">
      You have completed <span>{completedTodos}</span> of{' '}
      <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
