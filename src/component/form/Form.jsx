import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("sonu");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setage] = useState();
  const handleChange = (e) => {
    const res = e.target.value.toUpperCase();
    setName(res);
  };
  return (
    <>
      <div> Name</div>
      <input
        value={name}
        type="text"
        placeholder="Please enter your name"
        onChange={handleChange}
      />
      <div>email</div>
      <input
        value={email}
        type="email"
        placeholder="Please enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div> age</div>
      <input
        value={age}
        type="number"
        placeholder="Please enter your age"
        onChange={(e) => setage(e.target.value)}
      />
      <div> password</div>
      <input
        value={password}
        type="password"
        placeholder="Please enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
};

export default Form;
