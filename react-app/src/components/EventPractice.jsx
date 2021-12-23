import { useState } from "react";
const EventPractice = () => {
  //   const [message, setMessage] = useState("");
  //   const [username, setUsername] = useState("");

  //   const handleChangeUsername = (e) => {
  //     setUsername(e.target.value);
  //   };
  //   const handleChangeMessage = (e) => {
  //     setMessage(e.target.value);
  //   };
  const [form, setForm] = useState({ username: "", message: "" });
  const { username, message } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    alert(username + ": " + message);
    setForm({ username: "", message: "" });
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        onChange={handleChange}
        value={username}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        onChange={handleChange}
        value={message}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>확인</button>
    </>
  );
};

export default EventPractice;
