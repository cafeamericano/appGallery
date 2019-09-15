import React, { Component } from "react";
import AppsSection from "./AppsSection";

class ApplicationsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      databaseRecords: {
        data: []
      },
      activeTags: this.props.activeTags
    };
  }

  componentDidUpdate() {
    this.handleSearch();
  }

  componentWillMount() {
    this.handleSearch();
  }

  handleSearch() {
    let url = "/hit-db";
    fetch(url)
      .then(response => response.json())
      .then(results => {
        this.setState({
          databaseRecords: results
        });
      });
  }

  render() {
    //Prep
    var allItems = this.state.databaseRecords.data;
    var activeTags = this.state.activeTags;
    var featuredApps = allItems.filter(function(item) {
      return item.featured === true;
    });
    var minorApps = allItems.filter(function(item) {
      return item.featured === false && item.language === "JavaScript";
    });
    var nonJsApps = allItems.filter(function(item) {
      return item.language !== "JavaScript";
    });
    var nonJsApps = allItems.filter(function(item) {
      return item.language !== "JavaScript";
    });
    var queriedApps = allItems.filter(function(item) {
      return item.techsUsed.includes("JavaScript") && item.techsUsed.includes("MongoDB");
    });
    console.log(queriedApps)

    //Render
    return (
      <div>
        <AppsSection sectionName="Queried Apps" data={queriedApps} />
        <AppsSection sectionName="Featured Apps" data={featuredApps} />
        <AppsSection sectionName="Minor Apps" data={minorApps} />
        <AppsSection sectionName="Non-JS Apps" data={nonJsApps} />
      </div>
    );
  }
}

export default ApplicationsContainer;
