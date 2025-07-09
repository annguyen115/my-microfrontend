import React from 'react';
import { useAppContext } from 'shared/AppContext'; // CRA sẽ warning, nhưng vẫn chạy được

const Child2App = () => {
  const { message, setMessage } = useAppContext();

  return (
    <div>
      <h2>Child 2</h2>
      <p>{message}</p>
      <button onClick={() => setMessage('Updated from Child2')}>Update</button>
    </div>
  );
};

export default Child2App;