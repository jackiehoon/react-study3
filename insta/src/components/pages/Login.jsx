import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

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
import { getToken } from "../../apis/user";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, token } = await getToken(loginInfo);
    if (success) {
      // 로그인 성공
      // 1. localStorage에 token 저장
      // 2. axios instance의 header 에 token 입력
      // 3. useContext isLogin을 true로.
    } else {
      alert("로그인 실패");
    }
  };

  return (
    <PageWrapper>
      <Main>
        <Box>
          <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
          <Form onSubmit={handleSubmit}>
            <InputText
              name="username"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleChange}
            />
            <InputText
              name="password"
              placeholder="비밀번호"
              type="password"
              onChange={handleChange}
            />
            <BtnSubmit>로그인</BtnSubmit>
          </Form>
          <FBLogin>Facebook으로 로그인</FBLogin>
          <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
        </Box>
        <Box>
          <SignupWrapper>
            계정이 없으신가요? <Link to="/signup">가입하기</Link>
          </SignupWrapper>
        </Box>
      </Main>
    </PageWrapper>
  );
};

const FBLogin = styled.div`
  color: #385185;
  font-weight: bold;
  font-size: 14px;
  margin-top: 30px;
`;
const ForgotPassword = styled.div`
  font-size: 12px;
  margin-top: 20px;
`;

export default Login;
