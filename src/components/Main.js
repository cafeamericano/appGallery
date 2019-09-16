import React, { Component } from "react";

import ApplicationsContainer from "./ApplicationsContainer";
import Keyword from "./Keyword";
import Banner from "./banner.jpg";

var sidepanelStyle = {
  position: "-webkit-sticky",
  position: "sticky",
  top: "0"
};

var noPadding = {
  padding: "0px"
};

var bannerStyle = {
  width: "100%"
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalClicks: 0,
      subComponentVisibilityToggler: {
        Applications: true
      },
      keywordsArray: [],
      activeKeywords: []
    };
    this.grabKeywordsFromDatabase = this.grabKeywordsFromDatabase.bind(this);
    this.pullInKeywordName = this.pullInKeywordName.bind(this);
  }

  componentWillMount() {
    this.grabKeywordsFromDatabase();
  }

  grabKeywordsFromDatabase() {
    let url = "/keywords";
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          keywordsArray: response
        });
      });
  }

  pullInKeywordName(arg) {
    var activeKeywords = this.state.activeKeywords;
    console.log(activeKeywords);
    var isAlreadyInArray = activeKeywords.includes(arg);
    console.log(isAlreadyInArray);
    if (isAlreadyInArray) {
      let updatedArray = activeKeywords.filter(item => {
        return item !== arg;
      });
      console.log(updatedArray);
      this.setState({ activeKeywords: updatedArray });
    } else {
      let updatedArray = activeKeywords.concat(arg);
      console.log(updatedArray);
      this.setState({ activeKeywords: updatedArray });
    }
  }

  render() {
    let allKeywords = this.state.keywordsArray.map((keyword, i) => (
      <Keyword
        key={i}
        keywordName={keyword.name}
        type={keyword.type}
        passKeywordNameToParent={this.pullInKeywordName}
      />
    ));

    //Define tag groups
    let languages = allKeywords.filter(item => item.props.type === "language");
    let frameworks = allKeywords.filter(
      item => item.props.type === "framework"
    );
    let databases = allKeywords.filter(item => item.props.type === "database");
    let otherTechnologies = allKeywords.filter(
      item => item.props.type === "other"
    );

    return (
      <main className="container-fluid">
        <div className="row">
          {/* Column */}
          <section className="col-md-9 col-sm-12 p-3">
            <ApplicationsContainer
              activeKeywords={this.state.activeKeywords}
              visibility={this.state.subComponentVisibilityToggler.Applications}
            ></ApplicationsContainer>
          </section>
          {/* Column */}
          <section
            className="col-md-3 bg-light text-dark shadow"
            style={noPadding}
          >
            <nav style={sidepanelStyle}>
              <div>
                <img src={Banner} style={bannerStyle}></img>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  Languages
                  <hr></hr>
                  {languages}
                </div>

                <div className="mb-4">
                  Frameworks
                  <hr></hr>
                  {frameworks}
                </div>

                <div className="mb-4">
                  Databases
                  <hr></hr>
                  {databases}
                </div>

                <div className="mb-4">
                  Other Technologies
                  <hr></hr>
                  {otherTechnologies}
                </div>
              </div>
            </nav>
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
