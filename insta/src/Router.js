import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Login, Signup, Logout } from "./components/pages";
import { LoginCheck, TopNav } from "./components/organisms";

const Router = () => {
  // 로그인이 필요한 페이지에 로그인체크 컴포넌트 감싸기.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginCheck />}>
          <Route path="/" element={<TopNav />}>
            <Route path="/" element={<Main />} />
          </Route>
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
