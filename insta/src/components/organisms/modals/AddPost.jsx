import { useRef, useState } from "react";
import styled from "styled-components";

import { uploadImage } from "../../../apis/upload";
import { addPost } from "../../../apis/post";
import { ModalContainer, Backdrop } from "../../atoms/modal";
import { IconPost } from "../../../assets/images/icons";

const ModalAddPost = ({ onClose }) => {
  const fileEl = useRef(null);
  const [content, setContent] = useState("");
  const [imageList, setImageList] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage = {
        preview: reader.result,
        file,
      };
      setImageList((prev) => [...prev, newImage]);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    // 1. 이미지들을 업로드해서 s3주소를 받아온다
    // 2. s3주소랑 content를 서버에 보내서 새로운 post 작성

    const promiseList = imageList.map(({ file }) => uploadImage({ file }));
    // const promiseList = [
    //   uploadImage({ file: imageList[0].file }),
    //   uploadImage({ file: imageList[1].file }),
    //   uploadImage({ file: imageList[2].file }),
    //   uploadImage({ file: imageList[3].file }),
    // ];
    const urlList = await Promise.all(promiseList);

    addPost({ content, imageList: urlList });
  };

  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <Header>새 게시물 만들기</Header>
        <Main>
          {imageList.map(({ preview }) => (
            <ImgPreview src={preview} key={preview} />
          ))}
          <IconPost />
          <Guide>사진과 동영상을 여기에 끌어다 놓으세요</Guide>
          <BtnFile onClick={() => fileEl.current.click()}>
            컴퓨터에서 선택
          </BtnFile>
          <InputFile
            onChange={handleFileChange}
            type="file"
            ref={fileEl}
            accept="image/*"
          />

          <Textarea rows="6" onChange={(e) => setContent(e.target.value)} />

          <BtnSubmit onClick={handleSubmit}>업로드</BtnSubmit>
        </Main>
      </Container>
    </>
  );
};

const Container = styled(ModalContainer)`
  max-width: 670px;
  width: 70%;
`;
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
const Main = styled.main`
  height: 670px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto;
`;
const Guide = styled.h4`
  font-weight: lighter;
  font-size: 22px;
`;
const BtnFile = styled.button`
  color: #fff;
  background: #0095f6;
  font-weight: bold;
  border: transparent;
  border-radius: 4px;
  padding: 5px 9px;
  font-size: 14px;
  cursor: pointer;
`;
const InputFile = styled.input`
  display: none;
`;
const ImgPreview = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;
const Textarea = styled.textarea`
  resize: none;
  width: 90%;
  border: 1px solid;
  margin: 20px auto;
`;

const BtnSubmit = styled.button``;
export default ModalAddPost;
