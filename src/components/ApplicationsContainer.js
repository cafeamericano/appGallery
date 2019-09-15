import React, { Component } from "react";
import AppsSection from "./AppsSection";

class ApplicationsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      databaseRecords: {
        data: []
      }
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
    var activeTags = this.props.activeTags;
    var queriedApps = allItems.filter(function(item) {
      let litmus = true;
      for (let i = 0; i < activeTags.length; i++) {
        if (item.techsUsed.includes(activeTags[i])) {
        } else {
          litmus = false;
        }
      }
      return litmus;
    });
    console.log(queriedApps);

    //Render
    return (
      <div>
        <AppsSection sectionName="Queried Apps" data={queriedApps} resultCount={queriedApps.length}/>
      </div>
    );
  }
}

export default ApplicationsContainer;
