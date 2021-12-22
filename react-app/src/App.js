import Jsx from "./components/Jsx";
import MyComponent from "./components/MyComponent";

function App() {
  const name = "리액트123";
  return (
    <MyComponent name={name} name2="React2">
      안녕하세요
      <div>DIV 입니다.</div>
    </MyComponent>
  );
}

// {name: "react", name2: "REact2"}

export default App;
