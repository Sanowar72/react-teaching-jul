// import React, { useReducer } from "react";
// import reducer from "./component/reducer/reducer";
// import initialState from "./component/reducer/initialState";
// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h1>count value is :{state.count}</h1>
//       <h3>your name is : {state.name}</h3>
//       <button onClick={() => dispatch({ type: "increment", payload: 4 })}>
//         increase count
//       </button>

//       <button onClick={() => dispatch({ type: "decrement" })}>
//         decrease count
//       </button>

//       <button
//         onClick={() => dispatch({ type: "setName", payload: "New Name" })}
//       >
//         set name
//       </button>
//     </div>
//   );
// };

// export default App;
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import FixedDialer from "./components/fixedDialer/FixedDialer";
import ImageCaurosel from "./components/caurosel/ImageCaurosel";

const App = () => {
  return (
    <>
      {/* <Header />
      <Home />
      <Footer />
      <FixedDialer /> */}
      <ImageCaurosel />
    </>
  );
};

export default App;
