import axios from "axios";
import React, { useState } from "react";

const UserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userObj = {
    name: "",
    email: "",
    address: "",
    street: "",
    password: "",
    joke: "",
  };
  const [userData, setUserData] = useState(userObj);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUserData((pre) => ({ ...pre, [name]: value }));
  };
  console.log(userData);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const payload = {
  //     email: email,
  //     password: password,
  //   };
  //   console.log("this is payload....", payload);
  //   const url = "https://expresswithmongo.onrender.com/api/auth/signin";
  //   try {
  //     const res = await axios.post(url, payload, { withCredentials: true });
  //     // console.log(res);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <form onSubmit={handleOnchange}>
      <div>Email</div>
      <input
        value={userData.email}
        name="email"
        type="email"
        placeholder="Please enter your email"
        onChange={handleOnchange}
        required
      />
      <div>Name</div>
      <input
        value={userData.name.toUpperCase()}
        name="name"
        type="text"
        placeholder="Please enter your email"
        onChange={handleOnchange}
        required
      />
      <div>Address</div>
      <input
        value={userData.address}
        name="address"
        type="text"
        placeholder="Please enter your email"
        onChange={handleOnchange}
        required
      />
      <div>joke</div>
      <input
        value={userData.joke}
        name="joke"
        type="text"
        placeholder="Please enter your email"
        onChange={handleOnchange}
        required
      />
      <div>Street</div>
      <input
        value={userData.street}
        name="street"
        type="text"
        placeholder="Please enter your email"
        onChange={handleOnchange}
        required
      />
      <div>Password</div>
      <input
        value={userData.password}
        name="password"
        type="password"
        placeholder="Please enter your password"
        onChange={handleOnchange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
