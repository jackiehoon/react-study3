import { useState } from "react";

const Counter2 = () => {
  const [number, setNumber] = useState(0);
  const handleChange = (n) => {
    setNumber(number + n);
  };
  return (
    <>
      <h2>현재 카운터 값은 {number} 입니다</h2>
      <button onClick={() => handleChange(1)}>+1</button>
      <button onClick={() => handleChange(-1)}>-1</button>
      <button onClick={() => handleChange(-2)}>-2</button>
      <button onClick={() => handleChange(-5)}>-5</button>
      <button onClick={() => handleChange(-7)}>-7</button>
      <button onClick={() => handleChange(-9)}>-9</button>
    </>
  );
};

export default Counter2;
