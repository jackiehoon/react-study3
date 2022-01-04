import Bootstrap from "./components/bootstrap/Bootstrap";
import styles from "./App.module.css";

function App() {
  // const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      {/* <div className={styles.react}>안녕하십니까</div> */}
      <Bootstrap />
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
