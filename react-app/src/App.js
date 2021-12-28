import { useState } from "react";
import Info from "./components/Info";
import Average from "./components/Average";

function App() {
  // const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <Average />
      {/* <button
        onClick={() => {
          setShowInfo(!showInfo);
        }}
      >
        보이기
      </button>
      {showInfo && <Info />} */}
    </>
  );
}

export default App;
