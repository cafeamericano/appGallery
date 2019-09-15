import React, { Component } from "react";

var appThumbnailStyle = {
  height: "200px",
  maxWidth: "100%"
};

class AppCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      activeClass: "col-xl-4 col-lg-6"
    };
    this.activateHover = this.activateHover.bind(this);
    this.deactivateHover = this.deactivateHover.bind(this);
  }

  activateHover() {
    this.setState({
      isHovered: true,
      activeClass: "animated pulse col-xl-4 col-lg-6"
    });
  }

  deactivateHover() {
    this.setState({ isHovered: false, activeClass: "col-xl-4 col-lg-6" });
  }

  render() {
    //Place a star if this app is featured
    let featuredIndicator = this.props.data.isFeatured ? (
      <i className="float-right fas fa-star fa-lg text-warning p-1"></i>
    ) : (
      ""
    );
    //Place a team icon if this app is a collaboration
    let collaborationIndicator = this.props.data.isCollaboration ? (
      <i className="float-right fas fa-users fa-lg text-secondary p-1"></i>
    ) : (
      ""
    );
    //Only show the 'Experience' option for deployed apps
    let deployedLink =
      this.props.data.deployedLink !== "" ? (
        <span>
          <span> | </span>
          <a target="_blank" href={this.props.data.deployedLink}>
            <small>Experience</small>
          </a>
        </span>
      ) : (
        ""
      );
    //If app is deployed, thumbnail links to experience; otherwise, link to GitHub repo
    let thumbnailLink =
      this.props.data.deployedLink !== ""
        ? this.props.data.deployedLink
        : this.props.data.githubLink;
    //Render as follows
    return (
      <div
        className={this.state.activeClass}
        onMouseEnter={this.activateHover}
        onMouseLeave={this.deactivateHover}
      >
        <div className="card shadow mb-3">
          <div className="card-header text-left">
            <h5 className="float-left">{this.props.data.title}</h5>
            {featuredIndicator}
            {collaborationIndicator}
          </div>
          <a target="_blank" href={thumbnailLink} className='d-flex justify-content-center bg-light'>
            <img src={this.props.data.imagePath} style={appThumbnailStyle} />
          </a>
          <div className="card-footer text-right">
            <a target="_blank" href={this.props.data.githubLink}>
              <small>View Source</small>
            </a>
            {deployedLink}
          </div>
        </div>
      </div>
    );
  }
}

export default AppCard;
