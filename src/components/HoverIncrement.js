import React from "react";

class HoverIncrement extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>HoverCounting: {count} times.</h1>
      </div>
    );
  }
}

export default HoverIncrement;
