import axios from "axios";
import React, { useEffect, useState } from "react";
const App = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${count}`
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);
  console.log(data);
  return (
    <>
      {/* <Form /> */}
      <h1>count is : {count}</h1>
      <h1>use id is: {data?.id}</h1>
      <h1>title is : {data?.title}</h1>
      <h1>body is : {data?.body}</h1>
      <button onClick={() => setCount(count + 1)}>inc count</button>
    </>
  );
};

export default App;
