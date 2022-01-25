import { useRef } from "react";
import styled from "styled-components";
import { ModalContainer, Backdrop } from "../../atoms/modal";

const ModalAddPost = ({ onClose }) => {
  const fileEl = useRef(null);
  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <Header>새 게시물 만들기</Header>
        <Main>
          <Guide>사진과 동영상을 여기에 끌어다 놓으세요</Guide>
          <BtnFile onClick={() => fileEl.current.click()}>
            컴퓨터에서 선택
          </BtnFile>
          <InputFile type="file" ref={fileEl} />
        </Main>
      </Container>
    </>
  );
};

const Container = styled(ModalContainer)``;
const Header = styled.header`
  text-align: center;
  border-bottom: 1px solid #dbdbdb;
  color: #262626;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Main = styled.main``;
const Guide = styled.h4``;
const BtnFile = styled.button``;
const InputFile = styled.input`
  display: none;
`;

export default ModalAddPost;
