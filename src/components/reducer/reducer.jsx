const reducer = (state, action) => {
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
export default reducer;
