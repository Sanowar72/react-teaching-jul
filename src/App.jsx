import React, { useState } from "react";
import Home from "./component/Home";
import About from "./component/About";

const App = () => {
  const [pages, setPages] = useState("home");
  return (
    <>
      {pages === "home" ? <Home /> : <About />}
      <button onClick={() => setPages("home")}>see home</button>
      <button onClick={() => setPages("about")}>see about</button>
    </>
  );
};

export default App;
