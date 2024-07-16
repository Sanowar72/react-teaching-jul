import React, { useState } from "react";
import Hello from "./component/Hello";
import Name from "./component/Name";

function App() {
 
  return (
    <>
      <h1>this is app jsx </h1>
      <Name name="sonu" rollNo="17" />
      <Name name="tony" rollNo="19" />
      <Name name="sony" rollNo="35" />
      <Name name="shibonu" rollNo="45" />
    </>
  );
}

export default App;
