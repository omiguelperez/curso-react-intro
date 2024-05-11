import { useState } from 'react';

const withStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.sync();
      setStorageChange(false);
    };

    return (
      <WrappedComponent
        {...props}
        show={storageChange}
        toggleShow={toggleShow}
      />
    );
  };
};

export { withStorageListener };
