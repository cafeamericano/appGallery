import React, { Component } from "react";

var appThumbnailStyle = {
  height: "200px"
};

class AppCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-xl-4 col-md-6">
        <div className="card shadow mb-3">
          <div className="card-header text-left">
            <h5>{this.props.data.title}</h5>
          </div>
          <img src={this.props.data.imagePath} style={appThumbnailStyle} />
          <div className="card-footer text-left">
            <small>Uses: {this.props.data.techsUsed}</small>
          </div>
          <div className="card-footer text-right">
            <a href={this.props.data.githubLink}>
              <i class="fab fa-github"></i>
            </a>
            <span> | </span>
            <a href={this.props.data.deployedLink}>
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AppCard;
