import React, { Component } from "react";
import AppCard from "./AppCard";

class AppsFeatured extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cards = this.props.data.map(item => (
      <AppCard key={item._id} data={item} />
    ));
    return <div className="row animated fadeInUpBig">{cards}</div>;
  }
}

export default AppsFeatured;
