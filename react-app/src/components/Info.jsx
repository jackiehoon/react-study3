import { useState } from "react";
const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

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
