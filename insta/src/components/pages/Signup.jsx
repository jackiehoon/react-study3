import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../apis/user";
import {
  PageWrapper,
  Main,
  Box,
  Logo,
  Form,
  InputText,
  BtnSubmit,
  SignupWrapper,
} from "../atoms/login";

const Signup = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, passwordConfirm } = userInfo;

    if (password.length < 4) return alert("비밀번호가 너무 짧습니다.");
    if (password !== passwordConfirm)
      return alert("비밀번호를 정확히 입력하세요");

    const { success } = await addUser(userInfo);

    if (success) {
      // 회원가입 성공,
      alert("회원가입 성공");
      navigate("/login");
    } else {
      // 실패
      alert("중복된 아이디 입니다.");
    }
  };

  return (
    <PageWrapper>
      <Main>
        <Box>
          <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
          <Form onSubmit={handleSubmit}>
            <InputText
              placeholder="사용자이름"
              name="username"
              onChange={handleChange}
            />
            <InputText
              placeholder="비밀번호"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <InputText
              placeholder="비밀번호 확인"
              type="password"
              name="passwordConfirm"
              onChange={handleChange}
            />
            <BtnSubmit>가입</BtnSubmit>
          </Form>
        </Box>
        <Box>
          <SignupWrapper>
            계정이 있으신가요? <Link to="/login">로그인</Link>
          </SignupWrapper>
        </Box>
      </Main>
    </PageWrapper>
  );
};

export default Signup;
