import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log('Clicked the button');
        console.log(event);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
