import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
const Modal = ({ onClose, onChange }) => {
  // input을 위한 useState
  const [value, setValue] = useState("");
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    // Modal 컴포넌트가 생성되면 body에 overflow: hidden 속성으로
    // 스크롤을 막는다.
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "17px";

    return () => {
      // Modal컴포넌트가 제거되면 원래대로 돌려놓는다.
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);

  const handleClose = () => {
    setCollapse(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };
  const handleSave = () => {
    if (!window.confirm("닉네임을 변경하시겠습니까?")) return;

    onChange(value);
    onClose();
  };
  return (
    <>
      <Backdrop onClick={handleClose} collapse={collapse} />
      <Container collapse={collapse}>
        <Header>닉네임변경</Header>
        <Body>
          <input onChange={(e) => setValue(e.target.value)} />
        </Body>
        <Footer>
          <BtnClose onClick={handleClose}>Close</BtnClose>
          <BtnSave onClick={handleSave}>Save Changes</BtnSave>
        </Footer>
      </Container>
    </>
  );
};

const slideIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const backdropSlideIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 0.7;
    }
`;

const Backdrop = styled.div`
  animation: ${backdropSlideIn} 0.5s;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: ${({ collapse }) => (collapse ? 0 : 0.7)};
  transition: opacity 0.5s;
`;
const Container = styled.div`
  animation: ${slideIn} 0.5s;
  background: #fff;
  width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  opacity: ${({ collapse }) => collapse && 0};
  transition: opacity 0.5s;
`;
const Header = styled.header`
  padding: 16px;
  border-bottom: 1px solid #ddd;
  font-size: 24px;
`;
const Body = styled.main`
  padding: 16px;
`;
const Footer = styled.footer`
  padding: 12px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
`;
const Btn = styled.button`
  border-radius: 4px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  color: #fff;
  line-height: 1.5;
  margin: 4px;
`;
const BtnClose = styled(Btn)`
  background: #6c757d;
`;
const BtnSave = styled(Btn)`
  background: #0d6efd;
`;

export default Modal;
