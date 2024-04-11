import React, { useState } from "react";

export default function Contador() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prev) => prev + 1);
  };

  const restarValue = () => {
    setCounter((prev) => prev - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <button onClick={addValue}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={restarValue}>-</button>
      <p>{counter}</p>
    </div>
  );
}
