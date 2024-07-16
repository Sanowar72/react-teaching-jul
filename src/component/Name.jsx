import React from "react";

const Name = ({ name, age }) => {
  return (
    <div>
      <h1>your name is : {name}</h1>
      <h3>your age is : {age}</h3>
    </div>
  );
};

export default Name;
