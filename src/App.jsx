import React, { useState } from "react";
import Hello from "./component/Hello";
import Name from "./component/Name";

function App() {
  const myarr = [
    { name: "sai", age: 20, fatherName: "bruce", email: "hsbb@gamil.com" },
    { name: "prasad", age: 20, email: "hsbb@gamil.com" },
    { name: "priya", age: 20, fatherName: "bruce" },
    { name: "wayne", age: 20, fatherName: "bruce", email: "hsbb@gamil.com" },
    { name: "random", age: 20, email: "hsbb@gamil.com" },
  ];
  return (
    <>
      <h1>this is app jsx </h1>
      {myarr.map((item) => (
        <Name
          name={item.name}
          age={item.age}
          fatherName={item.fatherName}
          email={item.email}
        />
      ))}
    </>
  );
}

export default App;
