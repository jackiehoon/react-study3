import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히 가세요");

  const [style, setStyle] = useState({
    color: "black",
    fontSize: 60,
    margin: 20,
    background: "blue",
  });

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={style}>{message}</h1>
      <button
        style={{ color: "red" }}
        onClick={() => setStyle({ ...style, color: "red" })}
      >
        빨간색
      </button>
      <button
        style={{ color: "green" }}
        onClick={() => setStyle({ ...style, color: "green" })}
      >
        초록색
      </button>
    </div>
  );
};

export default Say;
