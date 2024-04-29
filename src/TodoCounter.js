import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter">
      You have completed {completed} of {total} TODOs
    </h1>
  );
}

export { TodoCounter };
