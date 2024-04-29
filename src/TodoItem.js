function TodoItem(props) {
  const { title } = props;
  return (
    <li>
      <span>V</span>
      <p>{title}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
