import React, { Component } from "react";

class FunBox extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.target.classList.toggle("selected");
    this.setState({ hello: true });
  }
  render() {
    return <div onClick={this.handleClick} className="fun-box"></div>;
  }
}

FunBox.defaultProps = { hey: "hey there" };

export default FunBox;
