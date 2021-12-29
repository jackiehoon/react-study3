import styled, { css } from "styled-components";

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;

  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  :hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${({ inverted }) =>
    inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};

  & + button {
    margin-left: 1rem;
  }
`;

const Btn = styled.button`
  background: #fff;
  border: none;
  border-radius: 4px;
  margin: 5px;
  cursor: pointer;
`;
const BtnBlue = styled(Btn)`
  background: blue;
  color: #fff;
`;
const BtnRed = styled(Btn)`
  background: red;
  color: #fff;
`;

const StyledComponent = () => (
  <Box color="red">
    <Btn>기본 버튼</Btn>
    <BtnBlue>파란 버튼</BtnBlue>
    <BtnRed>빨간 버튼</BtnRed>
    <Button>안녕하세요</Button>
    <Button inverted>테두리만</Button>
  </Box>
);

export default StyledComponent;
