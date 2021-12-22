const Jsx = () => {
  const name = "리액트";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  //   falsy : 0 undefined  false null NaN ""
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          color: "aqua",
          fontSize: "48px",
          fontWeight: "bold",
          padding: 16,
        }}
      >
        {name}
      </div>
      <h1 className="react">리액트 {name} 안녕!</h1>
      <h2>잘 작동하니?</h2>

      {name === "리액트!" ? (
        <h1>리액트 입니다</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}

      {name === "리액트!" && <h1>리액트 입니다.123</h1>}

      {name === 0 || "값이 falsy합니다."}
    </>
  );
};

export default Jsx;
