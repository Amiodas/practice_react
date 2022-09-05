import React from "react";

class User extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Username: {name(false)}</h1>
      </div>
    );
  }
}

export default User;
