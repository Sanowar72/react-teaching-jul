import React from "react";

const Name = ({ name, rollNo }) => {
  return (
    <div>
      <h1>your name is : {name}</h1>
      <h3>your roll no : {rollNo}</h3>
    </div>
  );
};

export default Name;
