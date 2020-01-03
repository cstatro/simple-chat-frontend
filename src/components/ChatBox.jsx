import React, { Component } from "react";

class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.state = { userName: "", error: "", loggedIn: false };
  }

  handleLogin = () => {
    const { userName } = this.state;
    if (userName) {
      const loggedIn = true;
      this.setState({ loggedIn });
    } else {
      const error = "Please enter a valid username";
      this.setState({ error });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { error } = this.state;

    const errorClass = !!error ? "active-error" : null;
    return (
      <div className="chat-box">
        <div className={errorClass}>
          <input type="text" className="login-field" />
          {error}
        </div>
        <button onClick={this.handleLogin}>LOGIN</button>
      </div>
    );
  }
}

export default ChatBox;
