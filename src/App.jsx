import React, { useReducer } from "react";

const App = () => {
  const initialState = {
    count: 0,
    name: "sonu",
    rollNo: 5,
    address: "unknown",
    email: "sonu@gmail.com",
  };
  const reducer = (state, action) => {
    console.log("first", JSON.stringify(action, null, 2));
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + (action.payload || 1) };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "setName":
        return { ...state, name: action.payload || "No data provided" };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>count value is :{state.count}</h1>
      <h3>your name is : {state.name}</h3>
      <button onClick={() => dispatch({ type: "increment", payload: 4 })}>
        increase count
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        decrease count
      </button>

      <button
        onClick={() => dispatch({ type: "setName", payload: "New Name" })}
      >
        set name
      </button>
    </div>
  );
};

export default App;
