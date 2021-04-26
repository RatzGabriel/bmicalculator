import * as React from "react";

export interface Props {
  bmi: any;
}

const Result: React.FC<Props> = (props) => {
  if (props.bmi > 25) {
    return <p className="red">You are overweight</p>;
  } else {
    return <p className="white">Your weight is ok</p>;
  }
};

export default Result;
