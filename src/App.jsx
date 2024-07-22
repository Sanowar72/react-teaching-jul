import React, { useState } from "react";


function App() {
  const age = 20;
  return (
    <>
      <h1>this is app jsx </h1>
      {age > 18 ? "you are eligible to vote" : "you r not eligible to vote"}
    </>
  );
}

export default App;
