import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + action.number };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "RESET":
      return { value: 0 };
    default:
      return state;
  }
};

const Counter3 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT", number: 5 })}>
        +5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
};

export default Counter3;
