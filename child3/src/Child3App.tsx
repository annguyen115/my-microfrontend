import React from "react";
import { useAppContext } from 'shared/AppContext'; // CRA sẽ warning, nhưng vẫn chạy được

const Child3App = () => {
  const { message, setMessage } = useAppContext();

  return (
    <div>
      <h2>Child 3</h2>
      <p>{message}</p>
      <button onClick={() => setMessage("Updated from Child3")}>Update</button>
    </div>
  );
};

export default Child3App;