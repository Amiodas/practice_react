import React from "react";
import Content from "./Content";
import ThemeContext from "../contexts/themeContext";

export default class Section extends React.Component {
  state = {
    theme: "dark",
  };
  render() {
    const { theme } = this.state;
    return (
      <div>
        <h3>I am Section component.</h3>
        <ThemeContext.Provider value={{ theme: theme }} changeTheme="changeTheme">
          <Content />
        </ThemeContext.Provider>
      </div>
    );
  }
}
