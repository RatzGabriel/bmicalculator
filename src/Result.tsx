import { render } from "@testing-library/react";
import * as React from "react";

export interface Props {
  bmi: any;
}

const Result: React.FC<Props> = (props) => {
  if (props.bmi > 25) {
    return <p>You are overweight</p>;
  } else {
    return <p>Your weight is ok</p>;
  }
};

export default Result;
