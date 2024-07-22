import React from "react";

const Name = ({ name, age, fatherName, email }) => {
  return (
    <div>
      <h1>your name is : {name}</h1>
      <h3>your age is : {age}</h3>
      <h1>father name is :{fatherName?.toUpperCase() || "no data provided"}</h1>
      <h2>ypur email is : {email}</h2>
    </div>
  );
};

export default Name;
