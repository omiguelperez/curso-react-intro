function TodoItem({ title, completed }) {
  return (
    <li>
      <span>V</span>
      <p>{title}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
