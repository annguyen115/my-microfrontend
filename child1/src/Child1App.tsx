import React from 'react';
import { useAppContext } from 'shared/AppContext'; // CRA sẽ warning, nhưng vẫn chạy được

const Child1App = () => {
  const { message, setMessage } = useAppContext();

  return (
    <div>
      <h2>Child 1</h2>
      <p>{message}</p>
      <button onClick={() => setMessage('Updated from Child1')}>Update</button>
    </div>
  );
};

export default Child1App;