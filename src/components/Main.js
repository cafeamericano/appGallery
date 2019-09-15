import React, { Component } from "react";

import ApplicationsContainer from "./ApplicationsContainer";
import Tag from "./Tag";

var tagsArr = [
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
      activeTags: []
    };
    this.pullInTagName = this.pullInTagName.bind(this);
  }

  pullInTagName(arg) {
    var activeTags = this.state.activeTags;
    console.log(activeTags)
    var isAlreadyInArray = activeTags.includes(arg);
    console.log(isAlreadyInArray)
    if (isAlreadyInArray) {
      let updatedArray = activeTags.filter(item => {
        return item !== arg;
      });
      console.log(updatedArray)
      this.setState({ activeTags: updatedArray });
    } else {
      let updatedArray = activeTags.concat(arg)
      console.log(updatedArray)
      this.setState({ activeTags: updatedArray });
    }
  }

  render() {
    let allTags = tagsArr.map((tagName, i) => (
      <Tag key={i} tagName={tagName} passTagNameToParent={this.pullInTagName} />
    ));
    return (
      <main className="container-fluid">
        <div className="row">
          {/* Column */}
          <section className="col-9 p-3" style={style.ApplicationsContainer}>
            <ApplicationsContainer activeTags={this.state.activeTags}
              visibility={this.state.subComponentVisibilityToggler.Applications}
            ></ApplicationsContainer>
          </section>
          {/* Column */}
          <section className="col-3 bg-light text-dark p-4">
            <h4>App Gallery</h4>
            <h1>Matthew Farmer</h1>
            <hr />
            {allTags}
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
