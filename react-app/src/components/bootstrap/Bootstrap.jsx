import styled from "styled-components";
import { useState } from "react";
import Accordion from "./Accordion";
import { accordionData, carouselData } from "../../data";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";
import Modal from "./Modal";

const Bootstrap = () => {
  const [nickName, setNickName] = useState("닉네임");
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const changeNickName = (nickName) => {
    setNickName(nickName);
  };
  return (
    <div style={{ paddingLeft: 200 }}>
      <Accordion data={accordionData} />
      <Accordion data={accordionData} />
      <Accordion data={accordionData} />
      <Accordion data={accordionData} />
      <Dropdown />
      <Carousel data={carouselData} />
      <h2>닉네임 : {nickName}</h2>
      <BtnModal onClick={handleClick}>닉네임 변경</BtnModal>
      {showModal && <Modal onClose={closeModal} onChange={changeNickName} />}
    </div>
  );
};

const BtnModal = styled.button``;

export default Bootstrap;
