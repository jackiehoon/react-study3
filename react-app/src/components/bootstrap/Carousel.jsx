import styled from "styled-components";
import { useState } from "react";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (n) => {
    if (n === -1 && activeIndex === 0) {
      setActiveIndex(data.length - 1);
    } else if (n === 1 && activeIndex === data.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + n);
    }
  };

  return (
    <Wrapper>
      <List>
        {data.map((image, index) => (
          <Item>
            <Image src={image} active={index === activeIndex} />
          </Item>
        ))}
      </List>
      <BtnPrev onClick={() => handleClick(-1)}>이전</BtnPrev>
      <BtnNext onClick={() => handleClick(1)}>다음</BtnNext>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
`;
const List = styled.ul``;
const Item = styled.li``;
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ active }) => !active && 0};
  transition: opacity 0.5s ease-in;
`;

const Btn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const BtnPrev = styled(Btn)`
  left: 10px;
`;
const BtnNext = styled(Btn)`
  right: 10px;
`;

export default Carousel;
