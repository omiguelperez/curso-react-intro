import React from 'react';

const TodoHeader = ({ loading, children }) => {
  return (
    <section>
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading })
      )}
    </section>
  );
};

export { TodoHeader };
