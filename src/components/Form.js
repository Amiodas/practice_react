import React from "react";

class Form extends React.Component {
  state = {
    title: "JavaScript",
    text: "Javascript is awesome",
    library: "Vue",
    isAwesome: true
  };
  formHandler = (e) => {
    console.log(e.target.type)
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
        this.setState({
          library: e.target.value,
        });
      } else if (e.target.type === "checkbox") {
        this.setState({
          isAwesome: e.target.checked,
        });
      } else {
      console.log("Type doesn't match");
    }
  };
  submitHandler = (e) => {
    e.preventDefault();
    const { title, text, library, isAwesome } = this.state;
    console.log(title, text, library, isAwesome)
  }
  render() {
    const { title, text, library, isAwesome } = this.state;
    return (
      <div>
      <br />
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Set Title"
            value={title}
            onChange={this.formHandler}
          />
          <br />
          <br />
          <textarea
            type="text"
            name="text"
            placeholder="Javascript is awesome"
            value={text}
            onChange={this.formHandler}
          />
          <br />
          <br />
          <select value={library} onChange={this.formHandler}>
            <option>Vue</option>
            <option>React</option>
          </select> 
          <br />
          <br />
        <input type="checkbox" checked={isAwesome} onChange={this.formHandler} /> 
        <br />
        <br/>
        <input type="submit" value="Submit"  />
        </form>
      </div>
    );
  }
}

export default Form;
