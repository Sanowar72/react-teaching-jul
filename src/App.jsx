import React, { useState } from "react";
import Hello from "./component/Hello";
import Name from "./component/Name";

function App() {
  const myarr = [
    { name: "sai", age: 20 },
    { name: "tony", age: 28 },
    { name: "steve", age: 30 },
    { name: "bruce", age: 35 },
    { name: "thor", age: 40 },
    { name: "tony", age: 28 },
    { name: "steve", age: 30 },
    { name: "bruce", age: 35 },
    { name: "tony", age: 28 },
    { name: "steve", age: 30 },
    { name: "bruce", age: 35 },
    { name: "tony", age: 28 },
    { name: "steve", age: 30 },
    { name: "bruce", age: 35 },
    { name: "tony", age: 28 },
    { name: "steve", age: 30 },
    { name: "bruce", age: 35 },
    { name: "tony", age: 28 },
    { name: "steve", age: 30 },
    { name: "bruce", age: 35 },
  ];
  return (
    <>
      <h1>this is app jsx </h1>
      {myarr.map((item) => (
        <Name name={item.name} age={item.age} />
      ))}
    </>
  );
}

export default App;
