import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { NameContext } from "../App";

export const ComponentB = () => {
  const name = useContext(NameContext);
  return (
    <>
      this is component b count {name.count}
      <ComponentC />
    </>
  );
};
