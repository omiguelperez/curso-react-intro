import { withStorageListener } from './withStorageListener';

const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return (
      <div>
        <p>There were changes</p>
        <button onClick={toggleShow}>Refresh</button>
      </div>
    );
  }
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
