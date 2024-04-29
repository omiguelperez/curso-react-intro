import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem title="Todo Item 1" />
        <TodoItem title="Todo Item 2" />
        <TodoItem title="Todo Item 3" />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
