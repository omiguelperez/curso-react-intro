import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <TodoContext.Consumer>
      {({ completedTodos, totalTodos }) => (
        <h1 className="TodoCounter">
          You have completed <span>{completedTodos}</span> of{' '}
          <span>{totalTodos}</span> TODOs
        </h1>
      )}
    </TodoContext.Consumer>
  );
}

export { TodoCounter };
