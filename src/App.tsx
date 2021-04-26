import React, { useState } from "react";

import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const onChange = (val: number, name: string) => {
    if (val >= 0 && val < 5000) {
      if (name === "weight") {
        console.log(val);

        setWeight(val);
      } else if (name === "height") {
        setHeight(val);
      } else return;
    }
  };

  return (
    <div className="App">
      <form action="">
        <input
          onChange={(e) => onChange(Number(e.target.value), e.target.name)}
          name="weight"
          type="text"
          pattern="[0-9]"
          placeholder="Weight in kg"
          value={weight}
        />
        <input
          onChange={(e) => onChange(Number(e.target.value), e.target.name)}
          name="height"
          type="number"
          placeholder="Height in kg"
          pattern="[0-9]"
          value={height}
        />
        <button>Calculate BMI</button>
      </form>
      <button onClick={() => console.log(weight)}>Test</button>
    </div>
  );
}

export default App;
