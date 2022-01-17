import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getBookDetail } from "../../apis/book";

const BookDetail = () => {
  const [book, setBook] = useState({});
  const {
    image,
    title,
    author,
    price,
    discount,
    pubdate,
    description,
    publisher,
  } = book;
  const { isbn } = useParams();

  const searchBookDetail = useCallback(async () => {
    const params = {
      d_isbn: isbn,
    };
    const { items } = await getBookDetail(params);
    setBook(items[0]);
  }, [isbn]);

  useEffect(() => {
    searchBookDetail();
  }, [searchBookDetail]);

  return (
    <>
      <Image src={image} />
      <Title>{title}</Title>
      <Author>저자: {author}</Author>
      <Publisher>출판사: {publisher}</Publisher>
      <Price>
        가격: {(+price).toLocaleString()} / 할인가격:{" "}
        {(+discount).toLocaleString()}
      </Price>
      <PubDate>출간일: {pubdate}</PubDate>

      <Description>{description}</Description>
    </>
  );
};

const Image = styled.img`
  height: 300px;
`;
const Title = styled.h2``;
const Author = styled.h4``;
const Publisher = styled.h4``;
const Description = styled.p``;
const Price = styled.h5``;
const PubDate = styled.h5``;

export default BookDetail;
