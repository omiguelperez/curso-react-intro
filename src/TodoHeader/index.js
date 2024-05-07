import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';

const TodoHeader = ({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
}) => {
  return (
    <>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    </>
  );
};

export { TodoHeader };
