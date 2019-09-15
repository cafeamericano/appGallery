import React, { Component } from "react";

var appThumbnailStyle = {
  height: "200px"
};

class AppCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      activeClass: "col-xl-4 col-md-6"
    };
    this.activateHover = this.activateHover.bind(this);
    this.deactivateHover = this.deactivateHover.bind(this);
  }

  activateHover() {
    this.setState({ isHovered: true, activeClass: "animated pulse col-xl-4 col-md-6" });
  }

  deactivateHover() {
    this.setState({ isHovered: false, activeClass: "col-xl-4 col-md-6" });
  }

  render() {
    return (
      <div
        className={this.state.activeClass}
        onMouseEnter={this.activateHover}
        onMouseLeave={this.deactivateHover}
      >
        <div className="card shadow mb-3">
          <div className="card-header text-left">
            <h5>{this.props.data.title}</h5>
          </div>
          <img src={this.props.data.imagePath} style={appThumbnailStyle} />
          <div className="card-footer text-right">
            <a href={this.props.data.githubLink}>
              <i className="fab fa-github"></i>
            </a>
            <span> | </span>
            <a href={this.props.data.deployedLink}>
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AppCard;
