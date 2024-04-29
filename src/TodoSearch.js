import './TodoSearch.css';

function TodoSearch() {
  return (
    <input
      className="TodoSearch"
      placeholder="Launch rocket to the moon..."
      onChange={(event) => {
        console.log('You wrote:', event.target.value);
      }}
    />
  );
}

export { TodoSearch };
