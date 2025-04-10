import React from "react";
import { useGlobalContext } from "../App";

const ComponentC = () => {
  const name = useGlobalContext();
  console.log("first", JSON.stringify(name, null, 2));

  return (
    <>
      {/* <div>updated count is {name.count}</div> */}
      <button onClick={() => name.setCount((pre) => pre + 1)}>
        increase button
      </button>
    </>
  );
};

export default ComponentC;
