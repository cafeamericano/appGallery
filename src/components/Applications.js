import React, { Component } from "react";

var appThumbnailStyle = {
  height: "200px"
};

class Applications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visibility,
      gatheredDbDocs: {
        data: []
      }
    };
  }

  componentDidUpdate() {
    //Allows state to change when prop is updated by parent
    let x = this.props.visibility;
    if (x !== this.state.visible) {
      this.setState({ visible: x });
    }
    this.handleSearch();
  }

  componentWillMount() {
    this.handleSearch();
  }

  componentDidMount() {
    let x = this.props.visibility;
    if (x !== this.state.visible) {
      this.setState({ visible: x });
    }
  }

  handleSearch = user => {
    let url = "/hit-db";
    fetch(url)
      .then(response => response.json())
      .then(results => {
        console.log(results);
        console.log(results.length);
        this.setState({
          gatheredDbDocs: results
        });
      });
  };

  drawCards = argObj => (
    <div className="col-xl-4 col-md-6">
      <div className="card shadow mb-3">
        <div className="card-header text-left">
          <h5>{argObj.title}</h5>
        </div>
        <img src={argObj.imagePath} style={appThumbnailStyle} />
        <div className="card-footer text-left">
          <small>Uses: {argObj.techsUsed}</small>
        </div>
        <div className="card-footer text-right">
          <a href={argObj.githubLink}>
            <i class="fab fa-github"></i>
          </a>
          <span> | </span>
          <a href={argObj.deployedLink}>
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );

  render() {
    if (this.state.visible) {
      if (this.state.gatheredDbDocs.data.length !== 0) {
        var allItems = this.state.gatheredDbDocs.data;
        var featuredApps = allItems.filter(function(item) {
          return item.featured === true;
        });
        var minorApps = allItems.filter(function(item) {
          return item.featured === false && item.language === "JavaScript";
        });
        var nonJsApps = allItems.filter(function(item) {
          return item.language !== "JavaScript";
        });
        return (
          /////////////////////////////////////////////////////////////////////////////////
          /////////////////////////////////////////////////////////////////////////////////
          <section class="animated fadeInUpBig">
            <subsection className="card mb-4">
              <div className="card-header text-left">
                <h5>Featured Apps</h5>
              </div>
              <div className="card-body">
                <div className="row">{featuredApps.map(this.drawCards)}</div>
              </div>
            </subsection>
            <subsection className="card mb-4">
              <div className="card-header text-left">
                <h5>Minor Apps</h5>
              </div>
              <div className="card-body">
                <div className="row">{minorApps.map(this.drawCards)}</div>
              </div>
            </subsection>
            <subsection className="card mb-4">
              <div className="card-header text-left">
                <h5>Non-JS Apps</h5>
              </div>
              <div className="card-body">
                <div className="row">{nonJsApps.map(this.drawCards)}</div>
              </div>
            </subsection>
          </section>
          /////////////////////////////////////////////////////////////////////////////////
          /////////////////////////////////////////////////////////////////////////////////
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

export default Applications;
