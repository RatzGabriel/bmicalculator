import React, { useState } from "react";
import styled from "styled-components";

import "./App.css";
import Result from "./Result";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  h1 {
    font-size: 3em;
    letter-spacing: 0.2em;
  }
`;

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
    <Div className="App">
      <h1>Calculate your BMI</h1>
      <h2>Your weight in kg:</h2>
      <input
        onChange={(e) => onChange(Number(e.target.value), e.target.name)}
        name="weight"
        type="number"
        pattern="[0-9]"
        value={weight}
      />
      <h2>Your height in cm:</h2>
      <input
        onChange={(e) => onChange(Number(e.target.value), e.target.name)}
        name="height"
        type="number"
        pattern="[0-9]"
        value={height}
      />
      <button onClick={calculate}>Calculate BMI</button>

      <Result bmi={bmiValue} />
    </Div>
  );
}

export default App;
