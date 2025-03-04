import React, { useState } from "react";


export default function Counter() {
    const [count, setCount] = useState(0);
  
    const handleIncrement = () => {
        setCount(prevCount => (prevCount + 1) % 10);
    };
  
    return (
      <div style={{ backgroundColor: "red", padding: '20px', borderRadius: '8px' }}>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    );
}
