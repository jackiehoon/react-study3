import styled, { css } from "styled-components";
import { useRef, useState } from "react";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    if (activeIndex === index) {
      return setActiveIndex(-1);
    }
    setActiveIndex(index);
  };

  return (
    <List>
      {data.map(({ id, title, content }, index) => (
        <Item key={id} active={index === activeIndex}>
          <Header onClick={() => handleClick(index)}>
            {title}
            <ImgArrow src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E" />
          </Header>
          <Body>{content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  border: 1px solid #efefef;
  border-radius: 4px;
  max-width: 800px;
  margin: 60px auto;
  border-radius: 4px;
`;
const Item = styled.li`
  ${({ active }) =>
    active &&
    css`
      ${Header} {
        color: #0c63e4;
        background-color: #e7f1ff;
      }
      ${Body} {
        display: block;
      }
      ${ImgArrow} {
        transform: rotate(-180deg);
      }
      ${Body} {
        max-height: 200px;
      }
    `}

  & + & {
    border-top: 1px solid #efefef;
  }
`;
const Header = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const ImgArrow = styled.img`
  width: 20px;
  height: 20px;
  transition: transform 0.25s ease-out;
`;
const Body = styled.div`
  display: none;
  padding: 15px;
  border-top: 1px solid #efefef;
  /* max-height: 0px;
  transition: max-height 1s ease-out;
  overflow: hidden; */
`;

export default Accordion;
