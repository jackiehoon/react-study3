import { useState, useEffect } from "react";
const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // useEffect(() => {
  //   console.log("렌더링이 완료되었습니다");
  //   console.log({ name, nickname });
  // });

  // 최초에 마운트 될 때 한번만 실행하고 싶을 때
  useEffect(() => {
    console.log("마운트 될 때만 실행됩니다.");

    // cleanup 함수 : unmount될 때(리액트 컴포넌트가 종료 될 때)
    return () => {
      console.log("unmount");
    };
  }, []);

  // 어떤 변수가 값이 바뀔 때 마다 함수를 실행하고 싶을 때
  useEffect(() => {
    console.log("name값이 변경되었습니다. " + name);
    return () => {
      console.log("name값이 바뀌기 직전에 실행됩니다.");
    };
  }, [name]);
  // name값이 변경되는 상황
  // 1. cleanup 함수 실행
  // 2. name변경
  // 3. useEffect 함수 실행

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      <div>
        <input placeholder="이름" onChange={handleChangeName} value={name} />
        <input
          placeholder="닉네임"
          onChange={handleChangeNickname}
          value={nickname}
        />
      </div>
      <h2>이름: {name}</h2>
      <h2>닉네임: {nickname}</h2>
    </>
  );
};

export default Info;
