import React, { Component } from "react";
import AppCard from "./AppCard";

class AppsSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cardsArray = this.props.data.map(item => (
      <AppCard key={item._id} data={item} />
    ));

    return (
      <div className="row animated fadeInUpBig">
        <div class="col">
          <div class="mb-4 p-3">
            <h3 className="text-dark mb-2">
              {this.props.sectionName}
            </h3>
            <hr></hr>
            <div class="row">{cardsArray}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppsSection;
