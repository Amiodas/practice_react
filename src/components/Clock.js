import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  state = { date: new Date(), locale: "bn-BD" };
  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick = (locale) => {
    console.log(this);
    this.setState({
      locale: locale,
    });
  };
  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    const { date, locale } = this.state;
    // let button;
    // if (locale === "bn-BD") {
    //   button = <Button change={this.handleClick} locale="en-US" />;
    // } else {
    //   button = <Button change={this.handleClick} locale="bn-BD" />;
    // }
    return (
      <div>
        <h1 className="heading">
          <span className="text">
            Hello, World! {date.toLocaleTimeString(locale)}
          </span>
        </h1>
        <fieldset>
          <legend>Enter Temperature</legend>
        </fieldset>
        {locale === "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US" />
        ) : (
          <Button change={this.handleClick} locale="bn-BD" />
        )}
      </div>
    );
  }
}

export default Clock;
