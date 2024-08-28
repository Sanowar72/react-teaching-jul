import React, { useContext } from "react";
import { NameContext } from "../App";

const ComponentC = () => {
  const name = useContext(NameContext);
  console.log("this is name value,,,,", name);

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
