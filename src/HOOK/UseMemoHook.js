import React, { useState, useMemo } from 'react';

// A computationally expensive function
function slowFunction(num) {
  console.log('Calling slow function...');
  for (let i = 0; i <= 1000000000; i++) {}  // Simulate a time-consuming calculation
  return num * 2;
}

function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  // Expensive calculation with useMemo
  const doubledValue = useMemo(() => {
    return slowFunction(inputValue);
  }, [inputValue]);  // Only re-run if inputValue changes

  return (
    <div>
      <h1>Memoized Calculation</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <p>Input Value: {inputValue}</p>
      <input 
        type="number" 
        value={inputValue} 
        onChange={(e) => setInputValue(Number(e.target.value))} 
      />
      
      <p>Result of Expensive Calculation: {doubledValue}</p>
    </div>
  );
}

export default UseMemoHook;