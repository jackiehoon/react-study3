import { useState } from "react";
import { InputText, Form, BtnSubmit } from "../atoms";
import { BookList } from "../organisms";
import { getBookList } from "../../apis/book";

const Book = () => {
  const [text, setText] = useState("");
  const [bookList, setBookList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      query: text,
    };
    const { items } = await getBookList(params);
    setBookList(items);
  };

  return (
    <div>
      <h1>Book</h1>
      <Form onSubmit={handleSubmit}>
        <InputText onChange={(e) => setText(e.target.value)} />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <BookList data={bookList} />
    </div>
  );
};

export default Book;
