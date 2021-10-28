import React, { useState } from "react";
import "./Counter.css";
function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2 data-testid="counter">{counterValue}</h2>
      <button data-testid="subtract-btn">-</button>
      <button data-testid="add-btn">+</button>
      <input
        data-testid="input"
        type="number"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className="text-center"
      />
    </div>
  );
}

export default Counter;
