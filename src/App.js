import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);
  const [resultLow, setResultLow] = useState(0);
  const [resultUp, setResultUp] = useState(0);

  function calculate() {
    const upper = (220 - age) * 0.85;
    const lower = (220 - age) * 0.65;
    setResultLow(lower);
    setResultUp(upper);
  }

  return (
    <div>
      <h3>Heart Rate limits calculator</h3>

      <div id="age">
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div id="result">
        <label>Heart rate limits</label>
        <output>
          {resultLow.toFixed(0)} - {resultUp.toFixed(0)}
        </output>
      </div>

      <button type="button" onClick={calculate}>
        Calculate
      </button>
      <footer>
        <h4>Arnaud DURAND</h4>
      </footer>
    </div>
  );
}

export default App;
