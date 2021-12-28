import { useState, useRef } from "react";

const IterationSample = () => {
  const [value, setValue] = useState("");
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  // const [nextId, setNextId] = useState(5);
  const nextId = useRef(5);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value.length === 0) return alert("값을 입력하세요");

    setNames([...names, { id: nextId.current, text: value }]);
    setValue("");
    nextId.current = nextId.current + 1;
  };

  const handleDelete = (id) => {
    // 삭제기능
    // 1. parameter로 받아온 id와 names배열에서 id가 같은 elemenet를 찾는다
    // 2. 그 element만 제거된 새로운 배열을 만든다.
    // 3. 새로운 배열을 setNames함수를 이용해서 names를 변경시킨다

    // 받아온 id와 element의 id가 다른 element만 뽑아서 새로운 배열을 만든다.
    const newNames = names.filter((name) => name.id !== id);
    setNames(newNames);
  };

  return (
    <div>
      <input onChange={handleChange} value={value} />
      <button onClick={handleClick}>추가</button>
      <ul>
        {names.map((name) => (
          <li key={name.id} onDoubleClick={() => handleDelete(name.id)}>
            {name.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IterationSample;

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((number) => number * number);
// result = [1, 4, 9, 16, 25];
