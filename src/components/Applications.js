import React, { Component } from "react";
import AppCard from "./AppCard";

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

  handleSearch() {
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
  }

  render() {
    let cards = this.state.gatheredDbDocs.data.map(item => (
      <AppCard key={item._id} data={item} />
    ));
    if (this.state.visible) {
      return <div className="row">{cards}</div>;
    } else {
      return null;
    }
  }
}

export default Applications;

// var allItems = this.state.gatheredDbDocs.data;
// var featuredApps = allItems.filter(function(item) {
//   return item.featured === true;
// });
// var minorApps = allItems.filter(function(item) {
//   return item.featured === false && item.language === "JavaScript";
// });
// var nonJsApps = allItems.filter(function(item) {
//   return item.language !== "JavaScript";
// });
