import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <PageWrapper>
      <Main>
        <Box>
          <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
          <Form>
            <InputTextWrapper>
              <InputText placeholder="전화번호, 사용자 이름 또는 이메일" />
            </InputTextWrapper>
            <InputTextWrapper>
              <InputText placeholder="비밀번호" type="password" />
            </InputTextWrapper>
            <BtnSubmitWrapper>
              <BtnSubmit>로그인</BtnSubmit>
            </BtnSubmitWrapper>
            <FBLogin>페이스북으로 로그인</FBLogin>
            <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
          </Form>
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

const PageWrapper = styled.div``;
const Main = styled.main``;
const Box = styled.div``;
const Logo = styled.img``;
const Form = styled.form``;
const InputTextWrapper = styled.div``;
const InputText = styled.input``;
const BtnSubmitWrapper = styled.div``;
const BtnSubmit = styled.button``;
const FBLogin = styled.div``;
const ForgotPassword = styled.div``;
const SignupWrapper = styled.div``;

export default Login;
