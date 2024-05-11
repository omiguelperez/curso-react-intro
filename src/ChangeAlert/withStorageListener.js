import { useState } from 'react';

const withStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    return (
      <WrappedComponent
        {...props}
        show={storageChange}
        toggleShow={setStorageChange}
      />
    );
  };
};

export { withStorageListener };
