import React, { Component } from "react";

import ApplicationsContainer from "./ApplicationsContainer";
import Keyword from "./Keyword";

var keywordsArr = [
  "HTML",
  "CSS",
  "JavaScript",
  "SQL",
  "JSON",
  "React",
  "NodeJS",
  "ExpressJS",
  "ReactJS",
  "jQuery",
  "Bootstrap",
  "Materialize",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Firebase DB",
  "Firebase Authentication",
  "Handlebars",
  "C++",
  "Python",
  "Java"
];

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
      activeKeywords: []
    };
    this.pullInKeywordName = this.pullInKeywordName.bind(this);
  }

  pullInKeywordName(arg) {
    var activeKeywords = this.state.activeKeywords;
    console.log(activeKeywords)
    var isAlreadyInArray = activeKeywords.includes(arg);
    console.log(isAlreadyInArray)
    if (isAlreadyInArray) {
      let updatedArray = activeKeywords.filter(item => {
        return item !== arg;
      });
      console.log(updatedArray)
      this.setState({ activeKeywords: updatedArray });
    } else {
      let updatedArray = activeKeywords.concat(arg)
      console.log(updatedArray)
      this.setState({ activeKeywords: updatedArray });
    }
  }

  render() {
    let allKeywords = keywordsArr.map((keywordName, i) => (
      <Keyword key={i} keywordName={keywordName} passKeywordNameToParent={this.pullInKeywordName} />
    ));
    return (
      <main className="container-fluid">
        <div className="row">
          {/* Column */}
          <section className="col-9 p-3" style={style.ApplicationsContainer}>
            <ApplicationsContainer activeKeywords={this.state.activeKeywords}
              visibility={this.state.subComponentVisibilityToggler.Applications}
            ></ApplicationsContainer>
          </section>
          {/* Column */}
          <section className="col-3 bg-light text-dark p-4">
            <h4>App Gallery</h4>
            <h1>Matthew Farmer</h1>
            <hr />
            {allKeywords}
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
