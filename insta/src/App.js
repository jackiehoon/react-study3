import { useState } from "react";
import { instance } from "./apis";
import Router from "./Router";
import UserContext from "./contexts/user";

function App() {
  // useContext에 로그인정보 담기
  const { token } = localStorage;
  if (token) {
    instance.defaults.headers.common["Authorization"] = token;
  }

  const [isLogin, setIsLogin] = useState(!!token);
  const value = {
    isLogin,
    setIsLogin: (val) => setIsLogin(val),
  };

  return (
    <UserContext.Provider value={value}>
      <Router />
    </UserContext.Provider>
  );
}

export default App;
