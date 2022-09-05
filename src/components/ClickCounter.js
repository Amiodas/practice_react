import React from "react";
import withCounter from "../HOC/withCounter";

class ClickCounter extends React.Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <p>Button is clicked { count } times.</p>
                <button type="button" onClick={incrementCount}>Clicked { count } times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter);

