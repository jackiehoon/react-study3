import { useState } from "react";

const Counter = () => {
  const [number2, setNumber2] = useState(0);
  //   const arr = [0, 1, 2];
  //   const one = arr[0];
  //   const two = arr[1];
  //   const [one, two] = arr;

  let number = 0;
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          number += 1;
          console.log(number);
        }}
      >
        +1
      </button>

      <h1>{number2}</h1>
      <button
        onClick={() => {
          setNumber2(number2 + 1);
        }}
      >
        +1
      </button>
    </>
  );
};

export default Counter;
