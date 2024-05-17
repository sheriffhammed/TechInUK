import { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState();
  const [countDown, setcountDown] = useState();

  useEffect(() => {
    if (countDown === 0) {
      return;
    }
    const timer = setTimeout(() => {
      setcountDown(countDown - 1);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [countDown]);

  return (
    <>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setcountDown(inputValue)}>Count Down</button>
      <b>Count Down: </b> {countDown}
    </>
  );
}
export default App;
