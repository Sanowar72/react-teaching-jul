import axios from "axios";
import React, { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    const url = "https://expresswithmongo.onrender.com/api/auth/signin";
    try {
      const res = await axios.post(url, payload);
      console.log(res);
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>Email</div>
      <input
        value={email}
        type="email"
        placeholder="Please enter your email"
        onChange={handleEmailChange}
        required
      />

      <div>Password</div>
      <input
        value={password}
        type="password"
        placeholder="Please enter your password"
        onChange={handlePasswordChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
