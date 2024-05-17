import { useStorageListener } from '../../hooks/useStorageListener';
import './ChangeAlert.css';

const ChangeAlert = ({ sync }) => {
  const { show, toggleShow } = useStorageListener({ sync });

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>It seems there were changes in another tab or browser window.</p>
          <p>Do you want to sync?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }
};

export { ChangeAlert };
