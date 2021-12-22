// {name: "react", name2: "REact2"}
const MyComponent = ({ name, children }) => {
  const hi = "hi";
  return (
    <>
      {hi}
      <br />
      안녕하세요, 제 이름은 {name}입니다.
      <div>{children}</div>
    </>
  );
};

export default MyComponent;
