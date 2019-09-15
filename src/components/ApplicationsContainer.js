import React, { Component } from "react";
import AppsSection from "./AppsSection";

class ApplicationsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visibility,
      databaseRecords: {
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

  handleSearch() {
    let url = "/hit-db";
    fetch(url)
      .then(response => response.json())
      .then(results => {
        console.log(results);
        console.log(results.length);
        this.setState({
          databaseRecords: results
        });
      });
  }

  render() {
    //Prep
    var allItems = this.state.databaseRecords.data;
    var featuredApps = allItems.filter(function(item) {
      return item.featured === true;
    });
    var minorApps = allItems.filter(function(item) {
      return item.featured === false && item.language === "JavaScript";
    });
    var nonJsApps = allItems.filter(function(item) {
      return item.language !== "JavaScript";
    });
    //Render
    if (this.state.visible) {
      return (
        <div>
          <AppsSection sectionName="Featured Apps" data={featuredApps} />
          <AppsSection sectionName="Minor Apps" data={minorApps} />
          <AppsSection sectionName="Non-JS Apps" data={nonJsApps} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ApplicationsContainer;
