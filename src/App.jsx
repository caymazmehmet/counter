import "./App.css";
import { useState } from "react";
function App() {
  const [count, setValue] = useState(0);

  function addPlus() {
    setValue((add) => add + 1);
  }
  function addMinus() {
    setValue(minus => minus -1);
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={addMinus}>
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={addPlus}>
        +
      </button>
    </div>
  );
}

export default App;
