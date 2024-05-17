import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { EditIcon } from '../TodoIcon/EditIcon';
import './TodoItem.css';

function TodoItem({ text, completed, onComplete, onDelete, onEdit }) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={completed} onComplete={onComplete} />
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <DeleteIcon onDelete={onDelete} />
      <EditIcon onEdit={onEdit} />
    </li>
  );
}

export { TodoItem };
