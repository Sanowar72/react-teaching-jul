import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>this is counter value :----- {count}</h1>
      <button onClick={() => increment()}>increment count</button>
    </>
  );
}

export default App;
