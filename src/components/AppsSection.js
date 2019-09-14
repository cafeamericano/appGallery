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
          <div class="card mb-4">
            <div class="card-header">
              <h5>{this.props.sectionName}</h5>
            </div>
            <div class="card-body row">{cardsArray}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppsSection;
