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

    let resultDisplay = this.props.resultCount !== 1 ? `Displaying ${this.props.resultCount} applications.` : `Displaying ${this.props.resultCount} application.`

    return (
      <div className="row animated fadeInUpBig">
        <div className="col">
          <div className="mb-4 p-3">
            <small className="text-dark mb-2">
              {resultDisplay}
            </small>
            <hr></hr>
            <div className="row">{cardsArray}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppsSection;
