import React, { Component } from "react";

var activeTagStyle = "badge badge-pill badge-info m-1";
var inactiveTagStyle = "badge badge-pill badge-light border border-dark m-1";

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      activeClass: inactiveTagStyle
    };
  }

  toggleTag = () => {
    if (this.state.isClicked) {
      this.setState({ isClicked: false, activeClass: inactiveTagStyle });
      this.props.passTagNameToParent(this.props.tagName);
    } else {
      this.setState({ isClicked: true, activeClass: activeTagStyle });
      this.props.passTagNameToParent(this.props.tagName);
    }
  };

  render() {
    return (
      <span className={this.state.activeClass} onClick={this.toggleTag}>
        {this.props.tagName || "Tech"}
      </span>
    );
  }
}

export default Tag;
