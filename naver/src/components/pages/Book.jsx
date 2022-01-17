import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import qs from "qs";

import { InputText, Form, BtnSubmit } from "../atoms";
import { BookList, Pagination } from "../organisms";
import { getBookList } from "../../apis/book";

const Book = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const { query, page } = qs.parse(search.slice(1));
    if (query) {
      setQuery(query);
      setText(query);
    }
    if (page) {
      setPage(page);
    }
  }, [search]);

  useEffect(() => {
    searchBook();
  }, [page, query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(text);
  };

  const searchBook = async () => {
    if (!query) return;

    const start = page * 10 - 9;
    const params = { query, start };
    const { items, total } = await getBookList(params);
    setBookList(items);
    setTotal(total);

    const search = qs.stringify({ query, page });
    navigate({ search });
  };

  return (
    <div>
      <h1>Book</h1>
      <Form onSubmit={handleSubmit}>
        <InputText value={text} onChange={(e) => setText(e.target.value)} />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <BookList data={bookList} />
      <Pagination
        nowPage={page}
        total={total}
        onPageChange={(page) => setPage(page)}
      />
    </div>
  );
};

export default Book;
