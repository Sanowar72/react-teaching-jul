import React, { useEffect, useState } from "react";
import Hello, { Demo } from "./component/Hello";
import axios from "axios";

function App() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState("");
  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          {post.map((ele) => (
            <h1>{ele.title}</h1>
          ))}
        </>
      )}
    </>
  );
}

export default App;
