import React, { Component } from "react";

var activeKeywordStyle = "badge badge-pill badge-info m-1";
var inactiveKeywordStyle = "badge badge-pill badge-light border border-dark m-1";

class Keyword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      activeClass: inactiveKeywordStyle
    };
  }

  toggleKeyword = () => {
    if (this.state.isClicked) {
      this.setState({ isClicked: false, activeClass: inactiveKeywordStyle });
      this.props.passKeywordNameToParent(this.props.keywordName);
    } else {
      this.setState({ isClicked: true, activeClass: activeKeywordStyle });
      this.props.passKeywordNameToParent(this.props.keywordName);
    }
  };

  render() {
    return (
      <span className={this.state.activeClass} onClick={this.toggleKeyword}>
        {this.props.keywordName || "Tech"}
      </span>
    );
  }
}

export default Keyword;
