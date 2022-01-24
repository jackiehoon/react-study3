import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../apis";
import UserContext from "../../contexts/user";

const Logout = () => {
  // 1. localStorage의 토큰 지우기
  // 2. axios instace의 default header 지우기
  // 3. UserContext의 isLogin false로 만들기
  // 4. 로그인 페이지로 보내기
  const navigate = useNavigate();
  const { setIsLogin } = useContext(UserContext);

  useEffect(() => {
    localStorage.removeItem("token");
    delete instance.defaults.headers.common["Authorization"];
    setIsLogin(false);
    navigate("/login");
  }, [setIsLogin, navigate]);

  return <></>;
};

export default Logout;
