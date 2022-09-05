import React from "react";
import withCounter from "../HOC/withCounter";

const HoverCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <h1 onMouseOver={incrementCount} style={{ background: "orange" }}>
        User interact {count} times.
      </h1>
    </div>
  );
};

export default withCounter(HoverCounter);
