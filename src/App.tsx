import React, { useState } from "react";

import "./App.css";
import Result from "./Result";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmiValue, setBmiValue] = useState(0);

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

  const calculate = () => {
    const newHeight = height / 100;
    const bmi = weight / (Number(newHeight) * Number(newHeight));
    setBmiValue(bmi);
  };

  return (
    <div className="App">
      <input
        onChange={(e) => onChange(Number(e.target.value), e.target.name)}
        name="weight"
        type="number"
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
      <button onClick={calculate}>Calculate BMI</button>

      <button onClick={() => console.log(weight)}>Test</button>
      <Result bmi={bmiValue} />
    </div>
  );
}

export default App;
