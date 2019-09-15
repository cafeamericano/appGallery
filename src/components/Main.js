import React, { Component } from "react";

import ApplicationsContainer from "./ApplicationsContainer";
import Keyword from "./Keyword";

var style = {
  ApplicationsContainer: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80)",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundAttachment: "fixed"
  }
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
          <section className="col-9 p-3" style={style.ApplicationsContainer}>
            <ApplicationsContainer
              activeKeywords={this.state.activeKeywords}
              visibility={this.state.subComponentVisibilityToggler.Applications}
            ></ApplicationsContainer>
          </section>
          {/* Column */}
          <section className="col-3 bg-light text-dark p-4">
            <h4>Matthew Farmer's</h4>
            <h2>App Gallery</h2>

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
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
