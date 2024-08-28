import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import ComponentA from "./component/ComponentA";

export const NameContext = createContext(null);

const App = () => {
  // const myobj = {
  //   name: "sonu",
  //   rollNo: 12,
  //   email: "bhbonefn",
  //   address: [1, 2, 3, 5, 6, 7, 8, 9],
  // };
  const [count, setCount] = useState(0);
  return (
    <>
      <NameContext.Provider value={{ count, setCount }}>
        <ComponentA />
      </NameContext.Provider>
    </>
  );
};

export default App;
