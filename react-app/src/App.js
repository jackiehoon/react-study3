import Todo from "./components/Todo";
import styles from "./App.module.css";

function App() {
  // const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className={styles.react}>안녕하십니까</div>
      <Todo />
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
